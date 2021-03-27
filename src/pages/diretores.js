import React from 'react';
import Header from '../layouts/Header';
import FormContentContainer from '../layouts/FormContentContainer';
import UnformInputText from '../components/UnformInputText';
import UnformTextArea from '../components/UnformTextArea';
import UnformSelect from '../components/UnformSelect';
import UnformInputRadio from '../components/UnformInputRadio';
import UnformInputCheckboxField from '../components/UnformInputCheckboxField';

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
                nome_opcoes: Yup.string().required('Esse campo é obrigatório'),
                username: Yup.string().required('Esse campo é obrigatório'),
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
                <UnformSelect
                    labelText="2) Escolha uma das opções a seguir"
                    name="nome_opcoes"
                    options={[
                        { label: 'Comum', value: 'comum' },
                        { label: 'MedPUC', value: 'medpuc' },
                        {
                            label: 'Gestor de Ligas',
                            value: 'gestor_liga',
                        },
                        {
                            label: 'Gestor COLIG',
                            value: 'gestor_colig',
                        },
                        { label: 'Gestor Site', value: 'gestor_site' },
                        { label: 'Orientador', value: 'orientador' },
                        { label: 'Coordenador', value: 'coordenador' },
                    ]}
                    placeholder="Selecione uma Opção"
                />
                <UnformInputText
                    labelText="3) Código INEP da sua escola:"
                    name="codigo_inep"
                />
                <UnformInputText
                    labelText="4) Município:"
                    name="nome_munincipio"
                />

                <UnformTextArea
                    labelText="5) Estado:"
                    name="nome_estado"
                    bigTextField
                />

                <UnformInputRadio
                    labelText="6) Choose a username"
                    name="username"
                    options={[
                        {
                            label:
                                'Teste para ver um bom tamanho para uma pergunta ou afirmação aqui para as pessoas',
                            value: 'teste1',
                        },
                        {
                            label:
                                'Teste para ver um bom tamanho para uma pergunta ou afirmação aqui para as pessoas',
                            value: 'teste2',
                        },
                        {
                            label:
                                'Teste para ver um bom tamanho para uma pergunta ou afirmação aqui para as pessoas',
                            value: 'teste3',
                        },
                    ]}
                />

                <UnformInputCheckboxField
                    labelText="7) Check a box please"
                    name="checkbox"
                    options={[
                        {
                            label:
                                'Teste para ver um bom tamanho para uma pergunta ou afirmação aqui para as pessoas',
                            value: 'teste1',
                        },
                        {
                            label:
                                'Teste para ver um bom tamanho para uma pergunta ou afirmação aqui para as pessoas',
                            value: 'teste2',
                        },
                        {
                            label:
                                'Teste para ver um bom tamanho para uma pergunta ou afirmação aqui para as pessoas',
                            value: 'teste3',
                        },
                    ]}
                />
            </FormContentContainer>
            <button type="submit" form="intendify-form">
                Enviar
            </button>
        </>
    );
}
