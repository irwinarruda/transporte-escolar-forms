import React from 'react';
import { Form } from '@unform/web';
import Router from 'next/router';

import { ValidationError } from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import { directors_schoolid } from '../../../utils/validationSchemas';

import ButtonGoTo from '../../../components/Buttons/ButtonGoTo';
import UnformInputText from '../../../components/Inputs/UnformInputText';
import UnformInputRadio from '../../../components/Inputs/UnformInputRadio';

export default function SchoolId({ page, setPage, formData, setFormData }) {
    const formRef = React.useRef(null);

    const handleSubmit = React.useCallback(
        async (data) => {
            try {
                formRef.current.setErrors({});
                await directors_schoolid.validate(data, {
                    abortEarly: false,
                });
                setPage('operation');
                setFormData((prev) => ({ ...prev, ...data }));
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (err) {
                if (err instanceof ValidationError) {
                    formRef.current.setErrors(getValidationErrors(err));
                }
            }
        },
        [setFormData, setPage],
    );

    const handleGoBackClick = React.useCallback(() => {
        Router.push('/');
    }, []);
    return (
        <>
            <div className="form-content-container">
                <div className="form-content-bar"></div>
                <h2>Identificação da Escola</h2>
                <Form
                    id="school_id_form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={formData}
                >
                    <UnformInputText
                        labelText="1) Nome da Escola:"
                        name="form_1_nome_escola"
                    />
                    <UnformInputText
                        labelText="2) Código INEP da sua escola:"
                        name="form_2_codigo_inep"
                    />
                    <UnformInputText
                        labelText="3) Município:"
                        name="form_3_nome_munincipio"
                    />
                    <UnformInputText
                        labelText="4) Estado:"
                        name="form_4_nome_estado"
                    />

                    <UnformInputRadio
                        labelText="5) Sua escola é:"
                        name="form_5_tipo_escola"
                        options={[
                            {
                                label: 'Municipal',
                                value: 'municipal',
                            },
                            {
                                label: 'Estadual',
                                value: 'estadual',
                            },
                            {
                                label: 'Federal',
                                value: 'federal',
                            },
                        ]}
                    />
                </Form>
            </div>
            <div className="form_content_buttons">
                <ButtonGoTo type="text" onClick={handleGoBackClick}>
                    Voltar
                </ButtonGoTo>
                <ButtonGoTo type="submit" form="school_id_form">
                    Próximo
                </ButtonGoTo>
            </div>
        </>
    );
}

/* form_1_nome_escola: formData.form_1_nome_escola || '',
                        form_2_codigo_inep: formData.form_2_codigo_inep || '',
                        form_3_nome_munincipio:
                            formData.form_3_nome_munincipio || '',
                        form_4_nome_estado: formData.form_4_nome_estado || '',
                        form_5_tipo_escola: formData.form_5_tipo_escola || '', */
