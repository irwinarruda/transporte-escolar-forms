import React from 'react';
import { Form } from '@unform/web';

import { ValidationError } from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import { directors_schoolid } from '../../../utils/validationSchemas';

import ButtonGoTo from '../../../components/Buttons/ButtonGoTo';
import UnformInputText from '../../../components/Inputs/UnformInputText';
import UnformInputRadio from '../../../components/Inputs/UnformInputRadio';
import UnformInputCheckboxField from '../../../components/Inputs/UnformInputCheckboxField';

export default function Management({ page, setPage, formData, setFormData }) {
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
        setPage('route');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [setPage]);
    return (
        <>
            <div className="form-content-container">
                <div className="form-content-bar"></div>
                <h2>Gestão</h2>
                <Form
                    id="route_form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={formData}
                >
                    <UnformInputRadio
                        labelText="23) O município possui algum sistema para realizar a roteirização das rotas do transporte escolar?(2.1)"
                        name="form_23_renderizar_roteirizacao"
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
                        labelText="24) O município possui algum sistema para realizar a gestão da operação do transporte escolar?(2.1)"
                        name="form_24_gestao_rotas"
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
                        labelText="25) O município possui metodologia para estimativa do custo operacional nas rotas?(2.1)"
                        name="form_25_custo_operacional"
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
                    <UnformInputCheckboxField
                        labelText="26) Quais dados do transporte escolar o município possui cadastro atualizado? (2.2)"
                        name="form_26_dados_cadastro"
                        options={[
                            {
                                label: 'Alunos transportados',
                                value: 'resposta1',
                            },
                            {
                                label: 'Alunos com deficiência',
                                value: 'resposta2',
                            },
                            {
                                label: 'Alunos atendidos por cada rota',
                                value: 'resposta3',
                            },
                            {
                                label: 'Motorista e veículos por rota',
                                value: 'resposta4',
                            },
                            {
                                label: 'Horário de operação das rotas',
                                value: 'resposta5',
                            },
                            {
                                label: 'Itinerário das rotas',
                                value: 'resposta6',
                            },
                            {
                                label: 'Pontos de parada',
                                value: 'resposta7',
                            },
                            {
                                label: 'Quilometragem das rotas',
                                value: 'resposta8',
                            },
                            {
                                label: 'Tempo de viagem nas rotas',
                                value: 'resposta9',
                            },
                            {
                                label: 'Dados da frota própria',
                                value: 'resposta10',
                            },
                            {
                                label: 'Dados da frota terceirizada',
                                value: 'resposta11',
                            },
                            {
                                label: 'Dados de manutenção dos veículos',
                                value: 'resposta12',
                            },
                            {
                                label:
                                    'Ocorrência nas rotas (quebra do veículo, atraso na viagem, acidentes, etc.)',
                                value: 'resposta13',
                            },
                            {
                                label: 'Custo de operação por rota',
                                value: 'resposta14',
                            },
                            {
                                label:
                                    'O município não possui cadastro dos dados do sistema de transporte escolar',
                                value: 'resposta15',
                            },
                        ]}
                    />

                    <UnformInputCheckboxField
                        labelText="27) Quais dados do transporte escolar estão georreferenciados (2.2)"
                        name="form_27_dados_georreferenciados"
                        options={[
                            {
                                label: 'Rotas',
                                value: 'resposta1',
                            },
                            {
                                label: 'Pontos de embarque e desembarque',
                                value: 'resposta2',
                            },
                            {
                                label: 'Escolas',
                                value: 'resposta3',
                            },
                            {
                                label:
                                    'Pontos críticos (porteiras, pontes, mata-burros, colchetes, atoleiros, etc.)',
                                value: 'resposta4',
                            },
                            {
                                label: 'Local de residência dos alunos',
                                value: 'resposta5',
                            },
                            {
                                label:
                                    'O município não possui dados georreferenciados',
                                value: 'resposta6',
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
