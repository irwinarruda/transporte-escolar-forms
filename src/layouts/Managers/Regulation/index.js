import React from 'react';
import { Form } from '@unform/web';

import { ValidationError } from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import { directors_schoolid } from '../../../utils/validationSchemas';

import ButtonGoTo from '../../../components/Buttons/ButtonGoTo';
import UnformInputText from '../../../components/Inputs/UnformInputText';
import UnformInputRadio from '../../../components/Inputs/UnformInputRadio';
import UnformInputCheckboxField from '../../../components/Inputs/UnformInputCheckboxField';

export default function Regulation({ page, setPage, formData, setFormData }) {
    const formRef = React.useRef(null);

    const handleSubmit = React.useCallback(
        async (data) => {
            try {
                formRef.current.setErrors({});
                /* await directors_schoolid.validate(data, {
                    abortEarly: false,
                }); */
                setPage('open_questions');
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
        setPage('management');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [setPage]);
    return (
        <>
            <div className="form-content-container">
                <div className="form-content-bar"></div>
                <h2>Regulação</h2>
                <Form
                    id="route_form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={formData}
                >
                    <UnformInputRadio
                        labelText="28) O município possui algum regulamento geral para a operação do transporte escolar? (2.1)"
                        name="form_28_regulamento_geral"
                        options={[
                            {
                                label: 'Sim',
                                value: 'sim',
                            },
                            {
                                label: 'Não',
                                value: 'nao',
                            },
                        ]}
                    />
                    <UnformInputRadio
                        labelText="29) Existe alguma norma/critério com parâmetros para a definição das rotas? (2.1)"
                        name="form_29_norma_rotas"
                        options={[
                            {
                                label: 'Sim',
                                value: 'sim',
                            },
                            {
                                label: 'Não',
                                value: 'nao',
                            },
                        ]}
                    />
                    <UnformInputRadio
                        labelText="30) Existe alguma norma/critério para estabelecer o local de embarque/desembarque dos alunos?(2.1)"
                        name="form_30_norma_desembarque"
                        options={[
                            {
                                label: 'Sim',
                                value: 'sim',
                            },
                            {
                                label: 'Não',
                                value: 'nao',
                            },
                        ]}
                    />
                    <UnformInputRadio
                        labelText="31) O município tem convênio para transportar alunos da rede estadual?(2.2)"
                        name="form_31_convenio_estadual"
                        options={[
                            {
                                label: 'Sim',
                                value: 'sim',
                            },
                            {
                                label: 'Não',
                                value: 'nao',
                            },
                        ]}
                    />
                    <UnformInputRadio
                        labelText="32) O município tem convênio para transportar alunos de outro município? (2.2)"
                        name="form_32_convenio_externo"
                        options={[
                            {
                                label: 'Sim',
                                value: 'sim',
                            },
                            {
                                label: 'Não',
                                value: 'nao',
                            },
                        ]}
                    />
                    <UnformInputRadio
                        labelText="33) Existe fiscalização, por parte do município, na operação do transporte escolar?"
                        name="form_33_fiscalizacao_municipio"
                        options={[
                            {
                                label: 'Sim',
                                value: 'sim',
                            },
                            {
                                label: 'Não',
                                value: 'nao',
                            },
                        ]}
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
