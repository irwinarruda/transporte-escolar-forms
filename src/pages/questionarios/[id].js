import React from 'react';
import { useRouter } from 'next/router';
import { QuestionsContainer } from '../../styles/style-questionario';

import Header from '../../layouts/Header';
import ButtonGoTo from '../../components/Buttons/ButtonGoTo';

import { api, FORMS_GET_ONE } from '../../services/questionariosApi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { formFunctions } from '../../helpers/formHandler';
import { makeValidationSchema } from '../../helpers/formValidationHandler';
import getValidationErrors from '../../helpers/getValidationErrors';

export default function Questionario({ formFields, formTitle, idPage }) {
    const router = useRouter();
    const formRef = React.useRef(null);
    const [blockedFields, setBlockedFields] = React.useState([]);
    const selectInputs = {};

    async function handleFormSubmit(data) {
        try {
            console.log(data);
            formRef.current.setErrors({});
            const schema = makeValidationSchema(formFields);
            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                formRef.current.setErrors(getValidationErrors(err));
                return;
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
                    id: '2',
                },
            },
        ],
        fallback: 'blocking',
    };
}
export async function getStaticProps(context) {
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
        revalidate: 172800,
    };
}
