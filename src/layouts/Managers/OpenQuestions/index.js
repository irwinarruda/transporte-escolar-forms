import React from 'react';
import { Form } from '@unform/web';

import { ValidationError } from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import { directors_schoolid } from '../../../utils/validationSchemas';

import ButtonGoTo from '../../../components/Buttons/ButtonGoTo';
import UnformInputText from '../../../components/Inputs/UnformInputText';
import UnformInputRadio from '../../../components/Inputs/UnformInputRadio';
import UnformInputCheckboxField from '../../../components/Inputs/UnformInputCheckboxField';

export default function OpenQuestions({
    page,
    setPage,
    formData,
    setFormData,
}) {
    const formRef = React.useRef(null);

    const handleSubmit = React.useCallback(
        async (data) => {
            try {
                formRef.current.setErrors({});
                /* await directors_schoolid.validate(data, {
                    abortEarly: false,
                }); */
                setPage('regulation');
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
        setPage('regulation');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [setPage]);
    return (
        <>
            <div className="form-content-container">
                <div className="form-content-bar"></div>
                <h2>Questões abertas</h2>
                <Form
                    id="route_form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={formData}
                >
                    <UnformInputText
                        labelText="34) Indique pelo menos 6 pontos positivos da operação com frota própria:"
                        name="form_34_positivo_propria"
                        bigTextField
                    />
                    <UnformInputText
                        labelText="35) Indique pelo menos 6 pontos negativos da operação com frota própria:"
                        name="form_35_negativo_propria"
                        bigTextField
                    />
                    <UnformInputText
                        labelText="36) Indique pelo menos 6 pontos positivos da operação com frota terceirizada:"
                        name="form_36_positivo_terceirizada"
                        bigTextField
                    />
                    <UnformInputText
                        labelText="37) Indique pelo menos 6 pontos negativos da operação com frota terceirizada:"
                        name="form_37_negativo_terceirizada"
                        bigTextField
                    />
                </Form>
            </div>
            <div className="form_content_buttons">
                <ButtonGoTo type="text" onClick={handleGoBackClick}>
                    Voltar
                </ButtonGoTo>
                <ButtonGoTo type="submit" form="route_form">
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
