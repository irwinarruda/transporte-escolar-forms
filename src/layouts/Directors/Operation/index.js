import React from 'react';
import { Form } from '@unform/web';

import { ValidationError } from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import { directors_operation } from '../../../utils/validationSchemas';

import ButtonGoTo from '../../../components/Buttons/ButtonGoTo';
import UnformInputRadioField from '../../../components/Inputs/UnformInputRadioField';

export default function SchoolId({ page, setPage, formData, setFormData }) {
    const formRef = React.useRef(null);

    const handleSubmit = React.useCallback(
        async (data) => {
            try {
                formRef.current.setErrors({});
                await directors_operation.validate(data, {
                    abortEarly: false,
                });
                setPage('impact');
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
        setPage('school_id');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [setPage]);
    return (
        <>
            <div className="form-content-container">
                <div className="form-content-bar"></div>
                <h2>Análise de Percepção - Operação</h2>
                <Form
                    id="operation_form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={formData}
                >
                    <UnformInputRadioField
                        labelText="6) Avalie em (ótimo, bom, regular, ruim ou péssimo) os itens listados abaixo relacionados com a operação do transporte escolar de seu município:"
                        name="form_6_primeira_avalicao"
                        fieldValues={[
                            {
                                label: 'Ótimo',
                                value: '1',
                            },
                            {
                                label: 'Bom',
                                value: '2',
                            },
                            {
                                label: 'Regular',
                                value: '3',
                            },
                            {
                                label: 'Ruim',
                                value: '4',
                            },
                            {
                                label: 'Péssimo',
                                value: '5',
                            },
                        ]}
                        options={[
                            {
                                label: 'Pontualidade das viagens',
                                name: 'resposta_1',
                            },
                            {
                                label:
                                    'Segurança nos trajetos nas rotas em termos de acidentes',
                                name: 'resposta_2',
                            },
                            {
                                label:
                                    'Tipos de veículos utilizados para o transporte escolar',
                                name: 'resposta_3',
                            },
                            {
                                label: 'Manutenção dos veículos',
                                name: 'resposta_4',
                            },
                            {
                                label: 'Limpeza dos veículos',
                                name: 'resposta_5',
                            },
                            {
                                label: 'Ítens de segurança nos veículos',
                                name: 'resposta_6',
                            },
                            {
                                label:
                                    'Forma de condução dos veículos por parte dos motoristas',
                                name: 'resposta_7',
                            },
                            {
                                label:
                                    'Tratamento dado pelos motoristas aos alunos',
                                name: 'resposta_8',
                            },
                            {
                                label:
                                    'Forma de acompanhamento dos alunos ao longo da viagem nos veículos',
                                name: 'resposta_9',
                            },
                            {
                                label:
                                    'Transparência da gestão do transporte escolar',
                                name: 'resposta_10',
                            },
                            {
                                label:
                                    'Processo de definição das rotas do transporte escolar',
                                name: 'resposta_11',
                            },
                            {
                                label:
                                    'Participação dos diretores na gestão da operação do transporte escolar',
                                name: 'resposta_12',
                            },
                            {
                                label: 'Pontualidade das viagens',
                                name: 'resposta_13',
                            },
                            {
                                label:
                                    'Participação do CACS/Fundeb na gestão da operação do transporte escolar',
                                name: 'resposta_14',
                            },
                            {
                                label:
                                    'Participação da sociedade (pais, alunos, professores, diretores, motoristas) na gestão da operação do transporte escolar',
                                name: 'resposta_15',
                            },
                            {
                                label: 'Tempo de deslocamento à pé dos alunos',
                                name: 'resposta_16',
                            },
                            {
                                label: 'Tempo de viagem dentro dos veículos',
                                name: 'resposta_17',
                            },
                            {
                                label: 'Número de alunos por veículo',
                                name: 'resposta_18',
                            },
                            {
                                label:
                                    'Localização dos pontos de embarque e desembarque',
                                name: 'resposta_19',
                            },
                            {
                                label:
                                    'Planejamento do transporte escolar por parte dos gestores do município',
                                name: 'resposta_20',
                            },
                            {
                                label:
                                    'Serviço prestado pela frota própria do município',
                                name: 'resposta_21',
                            },
                            {
                                label:
                                    'Serviço prestado pelas empresas terceirizadas',
                                name: 'resposta_22',
                            },
                            {
                                label:
                                    'Transporte escolar oferecido pelo município',
                                name: 'resposta_23',
                            },
                        ]}
                    />
                </Form>
            </div>
            <div className="form_content_buttons">
                <ButtonGoTo type="text" onClick={handleGoBackClick}>
                    Voltar
                </ButtonGoTo>
                <ButtonGoTo type="submit" form="operation_form">
                    Próximo
                </ButtonGoTo>
            </div>
        </>
    );
}
