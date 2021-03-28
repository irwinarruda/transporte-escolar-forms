import React from 'react';
import { Form } from '@unform/web';

import { ValidationError } from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import { directors_open_questions } from '../../../utils/validationSchemas';

import ButtonGoTo from '../../../components/Buttons/ButtonGoTo';
import ButtonSend from '../../../components/Buttons/ButtonSend';
import UnformInputText from '../../../components/Inputs/UnformInputText';

export default function SchoolId({ page, setPage, formData, setFormData }) {
    const formRef = React.useRef(null);

    const handleSubmit = React.useCallback(
        async (data) => {
            try {
                formRef.current.setErrors({});
                await directors_open_questions.validate(data, {
                    abortEarly: false,
                });
                setFormData((prev) => ({ ...prev, ...data }));
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (err) {
                if (err instanceof ValidationError) {
                    formRef.current.setErrors(getValidationErrors(err));
                }
            }
        },
        [setFormData, formData],
    );
    const handleGoBackClick = React.useCallback(() => {
        setPage('impact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [setPage]);
    return (
        <>
            <div className="form-content-container">
                <div className="form-content-bar"></div>
                <h2>Questões Abertas</h2>
                <Form
                    id="open_questions_form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={formData}
                >
                    <UnformInputText
                        labelText="8) Indique pelo menos outros 3 pontos positivos que julgue importante destacar, relacionados com a operação do transporte escolar em seu município."
                        name="form_8_pontos_positivos"
                    />
                    <UnformInputText
                        labelText="9) Indique pelo menos outros 3 pontos negativos que julgue importante destacar, relacionados com a operação do transporte escolar em seu município."
                        name="form_9_pontos_negativos"
                        bigTextField
                    />
                </Form>
            </div>
            <div className="form_content_buttons">
                <ButtonGoTo type="text" onClick={handleGoBackClick}>
                    Voltar
                </ButtonGoTo>
                <ButtonSend type="submit" form="open_questions_form">
                    Enviar
                </ButtonSend>
            </div>
        </>
    );
}
