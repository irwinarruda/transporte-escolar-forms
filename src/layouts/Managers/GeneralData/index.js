import React from 'react';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import { directors_schoolid } from '../../../utils/validationSchemas';

import ButtonGoTo from '../../../components/Buttons/ButtonGoTo';
import UnformInputText from '../../../components/Inputs/UnformInputText';
import UnformInputRadio from '../../../components/Inputs/UnformInputRadio';
import UnformInputTextField from '../../../components/Inputs/UnformInputTextField';

export default function GeneralData({ page, setPage, formData, setFormData }) {
    const formRef = React.useRef(null);

    const handleSubmit = React.useCallback(
        async (data) => {
            try {
                formRef.current.setErrors({});
                /* await directors_schoolid.validate(data, {
                    abortEarly: false,
                }); */
                console.log(data);
                const schema = Yup.object().shape({
                    form_8_total_alunos: Yup.object().shape({
                        propria: Yup.string().required('Olá mundo'),
                        terceirizada: Yup.string().required('Olá mundo'),
                    }),
                });
                await schema.validate(data, {
                    abortEarly: false,
                });

                setPage('fleet');
                setFormData((prev) => ({ ...prev, ...data }));
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    formRef.current.setErrors(getValidationErrors(err));
                }
            }
        },
        [setFormData, setPage],
    );

    const handleGoBackClick = React.useCallback(() => {
        setPage('city_id');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [setPage]);
    return (
        <>
            <div className="form-content-container">
                <div className="form-content-bar"></div>
                <h2>Dados Gerais do Transporte Escolar</h2>
                <Form
                    id="city_id_form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={formData}
                >
                    <UnformInputRadio
                        labelText="3) Quais modos de transporte escolar existem no município? (1):"
                        name="form_3_modos_transporte"
                        options={[
                            {
                                label: 'Rodoviário',
                                value: 'rodoviario',
                            },
                            {
                                label: 'Aquaviário',
                                value: 'aquaviario',
                            },
                            {
                                label: 'Rodoviário e Aquaviário',
                                value: 'rodoviario-aquaviario',
                            },
                        ]}
                    />

                    <UnformInputTextField
                        labelText="4) Como seu município opera o Transporte Escolar? (1):"
                        name="form_4_operar_transporte"
                        options={[
                            {
                                label: 'somente com frota própria',
                                value: 'propria',
                            },
                            {
                                label: 'somente com frota terceirizada',
                                value: 'terceirizada',
                            },
                            {
                                label:
                                    'com frota mista (própria + terceirizada)',
                                value: 'propria-terceirizada',
                            },
                        ]}
                    />

                    <UnformInputText
                        labelText="5) Quantas empresas e/ou autônomos participaram no último processo licitatório para a operação do transporte escolar no município? (3)"
                        name="form_5_ultimo-processo"
                    />

                    <UnformInputText
                        labelText="6) Quantas empresas e/ou autônomos atuam na operação do transporte escolar nas rotas terceirizadas?(3)"
                        name="form_6_empresas-atuam"
                    />

                    <UnformInputRadio
                        labelText="7) Quais estudantes são atendidos pelo transporte escolar no município? (1)"
                        name="form_7_area_estudantes"
                        options={[
                            {
                                label: 'Somente da área rural',
                                value: 'rural',
                            },
                            {
                                label: 'Somente da área urbana',
                                value: 'urbana',
                            },
                            {
                                label: 'Alunos da área rural e da área urbana',
                                value: 'rural-urbana',
                            },
                        ]}
                    />

                    <UnformInputTextField
                        labelText="8) Qual o total de alunos transportados? (1)"
                        name="form_8_total_alunos"
                        type="number"
                        options={[
                            {
                                label: 'Frota Própria',
                                name: 'propria',
                            },
                            {
                                label: 'Frota Terceirizada',
                                name: 'terceirizada',
                            },
                        ]}
                    />

                    <UnformInputRadio
                        labelText="9) Qual percentual de alunos que precisa utilizar mais de um modo de transporte e/ou veículo para chegar até a escola? (2.3)"
                        name="form_9_percentual_alunos"
                        options={[
                            {
                                label: 'Nenhum',
                                value: '0',
                            },
                            {
                                label: '1% a 10%',
                                value: '1-10',
                            },
                            {
                                label: '11% a 25%',
                                value: '11-25',
                            },
                            {
                                label: '26% a 50%',
                                value: '26-50',
                            },
                            {
                                label: '51% a 75%',
                                value: '51-75',
                            },
                            {
                                label: '76% a 99%',
                                value: '76-99',
                            },
                            {
                                label: 'Todos',
                                value: '100',
                            },
                        ]}
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

/* form_1_nome_escola: formData.form_1_nome_escola || '',
                        form_2_codigo_inep: formData.form_2_codigo_inep || '',
                        form_3_nome_munincipio:
                            formData.form_3_nome_munincipio || '',
                        form_4_nome_estado: formData.form_4_nome_estado || '',
                        form_5_tipo_escola: formData.form_5_tipo_escola || '', */
