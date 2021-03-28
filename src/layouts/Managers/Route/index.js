import React from 'react';
import { Form } from '@unform/web';

import { ValidationError } from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import { directors_schoolid } from '../../../utils/validationSchemas';

import ButtonGoTo from '../../../components/Buttons/ButtonGoTo';
import UnformInputText from '../../../components/Inputs/UnformInputText';
import UnformInputRadio from '../../../components/Inputs/UnformInputRadio';

export default function Route({ page, setPage, formData, setFormData }) {
    const formRef = React.useRef(null);

    const handleSubmit = React.useCallback(
        async (data) => {
            try {
                formRef.current.setErrors({});
                /* await directors_schoolid.validate(data, {
                    abortEarly: false,
                }); */
                setPage('management');
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
        setPage('fleet');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [setPage]);
    return (
        <>
            <div className="form-content-container">
                <div className="form-content-bar"></div>
                <h2>Rotas</h2>
                <Form
                    id="route_form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={formData}
                >
                    <UnformInputRadio
                        labelText="16) Qual o total de rotas rodoviárias em operação no transporte escolar do município? (1)"
                        name="form_16_tot_rotas_rodoviarios"
                        options={[
                            {
                                label: 'Frota Própria',
                                value: 'propria',
                            },
                            {
                                label: 'Frota Terceirizada',
                                value: 'terceirizada',
                            },
                        ]}
                    />

                    <UnformInputRadio
                        labelText="17) Qual o total de rotas aquaviárias em operação no transporte escolar do município?"
                        name="form_17_tot_rotas_aquaviarios"
                        options={[
                            {
                                label: 'Frota Própria',
                                value: 'propria',
                            },
                            {
                                label: 'Frota Terceirizada',
                                value: 'terceirizada',
                            },
                        ]}
                    />

                    <UnformInputRadio
                        labelText="18) Qual a quilometragem total das rotas rodoviárias? (1)"
                        name="form_18_tot_quilometragem"
                        options={[
                            {
                                label: 'Frota Própria',
                                value: 'propria',
                            },
                            {
                                label: 'Frota Terceirizada',
                                value: 'terceirizada',
                            },
                        ]}
                    />

                    <UnformInputRadio
                        labelText="19) Qual o tempo total gasto em todas as rotas aquaviárias, em um dia de operação? (1)"
                        name="form_19_tot_tempo"
                        options={[
                            {
                                label: 'Frota Própria',
                                value: 'propria',
                            },
                            {
                                label: 'Frota Terceirizada',
                                value: 'terceirizada',
                            },
                        ]}
                    />

                    <UnformInputRadio
                        labelText="20) Existe monitor nos veículos acompanhando os alunos nas rotas? (2.3)"
                        name="form_20_veiculos_monitor"
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
                        labelText="21) Quem é o responsável pela definição das rotas operadas pela frota própria do município? (1)"
                        name="form_21_rotas_propria_resp"
                        options={[
                            {
                                label: 'Técnico/Gestor do município',
                                value: 'municipio',
                            },
                            {
                                label: 'Técnico das empresas terceirizadas',
                                value: 'terceirizada',
                            },
                            {
                                label: 'Empresa de consultoria',
                                value: 'consultoria',
                            },
                        ]}
                        other
                    />

                    <UnformInputRadio
                        labelText="22) Quem é o responsável pela definição das rotas operadas pela frota terceirizada do município? (1)"
                        name="form_22_rotas_terceirizada_resp"
                        options={[
                            {
                                label: 'Técnico/Gestor do município',
                                value: 'municipio',
                            },
                            {
                                label: 'Técnico das empresas terceirizadas',
                                value: 'terceirizada',
                            },
                            {
                                label: 'Empresa de consultoria',
                                value: 'consultoria',
                            },
                        ]}
                        other
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
