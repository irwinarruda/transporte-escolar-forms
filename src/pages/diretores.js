import React from 'react';
import Header from '../layouts/Header';
import FormContentContainer from '../layouts/FormContentContainer';
import UnformInputText from '../components/UnformInputText';

import getValidationErrors from '../utils/getValidationErrors';
import * as Yup from 'yup';

export default function Diretores() {
    const formRef = React.useRef(null);

    const handleSubmit = React.useCallback(async (data) => {
        try {
            formRef.current.setErrors({});
            console.log(data);
            const schema = Yup.object().shape({
                nome_escola: Yup.string().required('Esse campo é obrigatório'),
                codigo_inep: Yup.string().required('Esse campo é obrigatório'),
                nome_munincipio: Yup.string().required(
                    'Esse campo é obrigatório',
                ),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                formRef.current.setErrors(getValidationErrors(err));
            }
        }
    }, []);
    return (
        <>
            <Header title="Questionário - Operação Transporte Escolar"></Header>
            <FormContentContainer
                title="Identificação da Escola"
                id="intendify-form"
                onSubmit={handleSubmit}
                reference={formRef}
            >
                <UnformInputText
                    labelText="1) Nome da Escola:"
                    name="nome_escola"
                />
                <UnformInputText
                    labelText="2) Código INEP da sua escola:"
                    name="codigo_inep"
                />
                <UnformInputText
                    labelText="3) Município:"
                    name="nome_munincipio"
                />
            </FormContentContainer>
            <button type="submit" form="intendify-form">
                Enviar
            </button>
        </>
    );
}
