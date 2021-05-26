import React from 'react';
import { useRouter } from 'next/router';
import { QuestionsContainer } from '../../styles/style-questionario';

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

export default function Questionario({ formFields, formTitle, idPage }) {
    const router = useRouter();
    const { createModal, createModalAsync, clearModal } = useAlertModal();
    const errorHandler = useErrorHandler();
    const formRef = React.useRef(null);
    const [blockedFields, setBlockedFields] = React.useState([]);
    const [selectInputs, setSelectInputs] = React.useState(() => {
        let selectObj = {};
        formFields.forEach((item) => {
            if (item.tipo === '6') {
                selectObj[`select_${item.id_pergunta}`] = {
                    value: '',
                    label: 'Selecione uma Opção',
                };
            }
        });
        return selectObj;
    });

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
                errorHandler('error', { title: 'Oops!' });
            }
        }
    }

    return (
        <>
            <Header
                title={
                    formTitle || 'Questionário - Operação Transporte Escolar'
                }
            />
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
                                        selectInputs={selectInputs}
                                        setSelectInputs={setSelectInputs}
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
        paths: [
            {
                params: {
                    id: '1',
                },
            },
            {
                params: {
                    id: '2',
                },
            },
            {
                params: {
                    id: '3',
                },
            },
            {
                params: {
                    id: '4',
                },
            },
        ],
        fallback: 'blocking',
    };
}
export async function getStaticProps(context) {
    try {
        const response = await api(FORMS_GET_ONE(context.params.id));
        const data = await response.data;
        let realData = [];
        if (data.result) {
            realData = data.data;
        }
        return {
            props: {
                formFields: realData.perguntas,
                formTitle: realData.titulo,
                idPage: context.params.id,
            },
            revalidate: staticPropsConfig.revalidate,
        };
    } catch (err) {
        console.error(err);
    }
}
