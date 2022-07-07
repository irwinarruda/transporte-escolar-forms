import React from 'react';
import { useRouter } from 'next/router';
import {
    QuestionsContainer,
    HeaderText,
    HeaderGlossary,
} from '../../styles/style-questionario';

import { Collapse } from 'react-collapse';
import { HamburgerMinus } from 'react-animated-burgers';
import Header from '../../layouts/Header';
import ButtonGoTo from '../../components/Buttons/ButtonGoTo';

import {
    api,
    FORMS_GET_ONE,
    FORMS_SEND,
} from '../../services/questionariosApi';
import staticPropsConfig from '../../config/staticPropsConfig';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { formFunctions } from '../../helpers/formHandler';
import { makeValidationSchema } from '../../helpers/formValidationHandler';
import getValidationErrors from '../../helpers/getValidationErrors';
import { useAlertModal } from '../../hooks/AlertModal';
import { useErrorHandler } from '../../hooks/Error';

export default function Questionario({ formFields, formInfo, idPage }) {
    const router = useRouter();
    const { createModal, createModalAsync, clearModal } = useAlertModal();
    const errorHandler = useErrorHandler();
    const formRef = React.useRef(null);
    const [glossary, setGlossary] = React.useState(false);
    const [blockedFields, setBlockedFields] = React.useState([]);

    async function handleFormSubmit(data) {
        try {
            createModal();
            formRef.current.setErrors({});
            const schema = makeValidationSchema(formFields, blockedFields);
            await schema.validate(data, {
                abortEarly: false,
            });
            const body = {
                id_questionario: idPage,
                respostas: data,
            };
            await api(FORMS_SEND(body));
            await createModalAsync('success', {
                title: 'Sucesso!!',
                text: 'Formulário preenchido com sucesso',
            });
            router.push('/questionarios/obrigado');
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                formRef.current.setErrors(getValidationErrors(err));
                createModal('warning', {
                    title: 'Atenção',
                    text: 'Preencha todos os campos',
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            } else {
                errorHandler(err, { title: 'Oops!' });
            }
        }
    }
    const handleGlossaryClick = React.useCallback(
        (event) => {
            event.preventDefault();
            setGlossary((prev) => !prev);
        },
        [setGlossary],
    );
    return (
        <>
            <Header
                title={
                    formInfo.titulo ||
                    'Questionário - Operação Transporte Escolar'
                }
            >
                <HeaderText
                    dangerouslySetInnerHTML={{ __html: formInfo.texto }}
                ></HeaderText>
                <HeaderGlossary>
                    <a
                        onClick={handleGlossaryClick}
                        href="#glossaryCollapse"
                        title="Abrir Glossário"
                        role="button"
                        aria-expanded={glossary}
                        aria-controls="#glossaryCollapse"
                    >
                        <HamburgerMinus
                            buttonWidth={30}
                            isActive={glossary}
                            aria-hidden="true"
                            aria-expanded={glossary}
                            aria-controls="#glossaryCollapse"
                        />
                        Glossário
                    </a>
                    <Collapse
                        isOpened={glossary}
                        id="glossaryCollapse"
                        itemID="glossaryCollapse"
                        role
                    >
                        <div
                            id="glossaryCollapse"
                            dangerouslySetInnerHTML={{
                                __html: formInfo.glossario,
                            }}
                        ></div>
                    </Collapse>
                </HeaderGlossary>
            </Header>
            <QuestionsContainer>
                <div className="form-content-container">
                    <div className="form-content-bar"></div>
                    <Form
                        onSubmit={handleFormSubmit}
                        ref={formRef}
                        id="cecate_forms"
                    >
                        {formFields.length > 0 &&
                            formFields.map((item) => {
                                let TipoFunction = formFunctions.get(item.tipo);
                                return (
                                    <TipoFunction
                                        formItem={item}
                                        key={item.id_pergunta}
                                        blockedFields={blockedFields}
                                        setBlockedFields={setBlockedFields}
                                    />
                                );
                            })}
                    </Form>
                </div>
                <div className="form_content_buttons">
                    <ButtonGoTo
                        type="button"
                        onClick={() => router.push(`/questionarios`)}
                    >
                        Voltar
                    </ButtonGoTo>
                    <ButtonGoTo type="submit" form="cecate_forms">
                        Enviar
                    </ButtonGoTo>
                </div>
            </QuestionsContainer>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export async function getStaticProps(context) {
    try {
        const response = await api(FORMS_GET_ONE(context.params.id));
        const data = await response.data;
        let treatedData = [];
        if (data.result) {
            treatedData = data.data;
        }
        return {
            props: {
                formFields: treatedData.perguntas,
                formInfo: {
                    titulo: treatedData.titulo || '',
                    texto: treatedData.texto || '',
                    glossario: treatedData.glossario || '',
                },
                idPage: context.params.id,
            },
            revalidate: staticPropsConfig.revalidate,
        };
    } catch (err) {
        return {
            redirect: {
                permanent: false,
                destination: '/questionarios',
            },
            revalidate: staticPropsConfig.revalidate,
        };
    }
}
