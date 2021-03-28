import React from 'react';
import { Form } from '@unform/web';

import { ValidationError } from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import { directors_schoolid } from '../../../utils/validationSchemas';

import ButtonGoTo from '../../../components/Buttons/ButtonGoTo';
import UnformInputText from '../../../components/Inputs/UnformInputText';
import UnformInputRadio from '../../../components/Inputs/UnformInputRadio';

export default function Fleet({ page, setPage, formData, setFormData }) {
    const formRef = React.useRef(null);

    const handleSubmit = React.useCallback(
        async (data) => {
            try {
                formRef.current.setErrors({});
                /* await directors_schoolid.validate(data, {
                    abortEarly: false,
                }); */
                setPage('route');
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
        setPage('general_data');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [setPage]);
    return (
        <>
            <div className="form-content-container">
                <div className="form-content-bar"></div>
                <h2>Frota</h2>
                <Form
                    id="fleet_form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={formData}
                >
                    <UnformInputRadio
                        labelText="10) Qual o total de veículos rodoviários em operação no transporte escolar do município? (1)"
                        name="form_10_tot_veiculos_rodoviarios"
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
                        labelText="11) Qual o total de veículos aquaviários em operação no transporte escolar do município? (1)"
                        name="form_11_tot_veiculos_aquaviarios"
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
                        labelText="12) Qual a idade média dos veículos do transporte escolar?"
                        name="form_12_idade_media_veiculos"
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
                        labelText="13) Os veículos do transporte escolar são adaptados para Pessoas com Deficiência?"
                        name="form_13_veiculos_adaptados"
                        options={[
                            {
                                label: 'Sim, todos os veículos são adaptados',
                                value: 'todos',
                            },
                            {
                                label:
                                    'Sim, apenas alguns veículos são adaptados',
                                value: 'alguns',
                            },
                            {
                                label: 'Não',
                                value: 'nenhum',
                            },
                        ]}
                    />

                    <UnformInputRadio
                        labelText="14) Existem veículos reservas para a substituição daqueles que apresentam, ocasionalmente, problemas durante a operação? (2.3)"
                        name="form_14_veiculos_reservas"
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
                        labelText="15) Com qual periodicidade é realizada a manutenção dos veículos do transporte escolar de seu município?"
                        name="form_15_periodicidade_manutencao"
                        options={[
                            {
                                label: 'Semanalmente',
                                value: 'semanalmente',
                            },
                            {
                                label: 'Mensalmente',
                                value: 'mensalmente',
                            },
                            {
                                label: 'Trimestralmente',
                                value: 'trimestalmente',
                            },
                            {
                                label: 'Semestralmente',
                                value: 'semestralmente',
                            },
                            {
                                label: 'Anualmente',
                                value: 'anualmente',
                            },
                            {
                                label:
                                    'Não são realizadas manutenções periódicas',
                                value: 'nunca',
                            },
                        ]}
                    />
                </Form>
            </div>
            <div className="form_content_buttons">
                <ButtonGoTo type="text" onClick={handleGoBackClick}>
                    Voltar
                </ButtonGoTo>
                <ButtonGoTo type="submit" form="fleet_form">
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
