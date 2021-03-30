import React from 'react';
import { Form } from '@unform/web';
import Router from 'next/router';
import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import {
    api,
    GET_ESTADOS,
    GET_MUNICIPIOS,
    GET_ESCOLAS,
} from '../../../services/api';

import ButtonGoTo from '../../../components/Buttons/ButtonGoTo';
import UnformInputText from '../../../components/Inputs/UnformInputText';
import UnformInputSelect from '../../../components/Inputs/UnformInputSelect';
import UnformSelect from '../../../components/Inputs/UnformSelect';
import ReactSelectInput from '../../../components/Inputs/ReactSelectInput';
import Select from 'react-select';

export default function SelectTest({ page, setPage, formData, setFormData }) {
    const formRef = React.useRef(null);
    const [statesObj, setStatesObj] = React.useState([]);
    const [municipios, setMunicipios] = React.useState([]);
    const [escolas, setEscolas] = React.useState([]);

    const handleSubmit = React.useCallback(async (data) => {
        try {
            formRef.current.setErrors({});
            console.log(data);
            setPage('city_id');
            setFormData((prev) => ({ ...prev, ...data }));
            /* const schema = Yup.object().shape({
                form1: Yup.string().required('Olá mundo'),
            });
            await schema.validate(data, {
                abortEarly: false,
            }); */
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                formRef.current.setErrors(getValidationErrors(err));
            }
        }
    }, []);

    const handleGoBackClick = React.useCallback(() => {
        Router.push('/');
    }, []);

    async function handleSelectEstados() {
        const response = await api(GET_ESTADOS());
        const data = await response.data;
        setStatesObj(
            data.data.map((item) => ({
                label: item.nome,
                value: item.codigo,
            })),
        );
        console.log(data);
    }

    async function handleSelectMunicipios() {
        const inputId = formRef.current.getFieldValue('form1');
        if (inputId.length > 0) {
            const response = await api(GET_MUNICIPIOS(inputId));
            const data = await response.data;
            setMunicipios(
                data.data.map((item) => ({
                    label: item.nome,
                    value: item.codigo_ibge,
                })),
            );
            console.log(data);
        }
    }
    async function handleSelectEscolas() {
        const inputId = formRef.current.getFieldValue('form2');
        if (inputId.length > 0) {
            const response = await api(GET_ESCOLAS(inputId));
            const data = await response.data;
            setEscolas(
                data.data.map((item) => ({
                    label: item.NO_ENTIDADE,
                    value: item.CO_ENTIDADE,
                })),
            );
            console.log(data);
        }
    }
    return (
        <>
            <div className="form-content-container">
                <div className="form-content-bar"></div>
                <h2>Teste</h2>

                <Form
                    id="city_id_form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={formData}
                >
                    <ReactSelectInput
                        labelText="1) Estado:"
                        name="form1"
                        options={statesObj}
                        onFocus={handleSelectEstados}
                    />
                    <ReactSelectInput
                        labelText="2) Nome do Município:"
                        name="form2"
                        options={municipios}
                        onFocus={handleSelectMunicipios}
                    />
                    <ReactSelectInput
                        labelText="3) Nome da Escola:"
                        name="form3"
                        options={escolas}
                        onFocus={handleSelectEscolas}
                    />
                </Form>
            </div>
            <div className="form_content_buttons">
                <ButtonGoTo type="text" onClick={handleGoBackClick}>
                    Voltar
                </ButtonGoTo>
                <ButtonGoTo type="submit" form="city_id_form">
                    Próximo
                </ButtonGoTo>
            </div>
        </>
    );
}
