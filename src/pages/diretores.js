import React from 'react';
import Header from '../layouts/Header';
import FormContentContainer from '../layouts/FormContentContainer';
import UnformInputText from '../components/UnformInputText';
import UnformTextArea from '../components/UnformTextArea';
import UnformSelect from '../components/UnformSelect';
import UnformInputRadio from '../components/UnformInputRadio';
import UnformInputRadioField from '../components/UnformInputRadioField';
import UnformInputCheckboxField from '../components/UnformInputCheckboxField';

import getValidationErrors from '../utils/getValidationErrors';
import * as Yup from 'yup';

export default function Diretores() {
    const formRef = React.useRef(null);

    const handleSubmit = React.useCallback(async (data) => {
        try {
            formRef.current.setErrors({});
            console.log(data);
            const schema = Yup.object().shape({
                nome_escola: Yup.string().required('Esse campo é obrigatório'),
                codigo_inep: Yup.string().required('Esse campo é obrigatório'),
                nome_munincipio: Yup.string().required(
                    'Esse campo é obrigatório',
                ),
                nome_opcoes: Yup.string().required('Esse campo é obrigatório'),
                username: Yup.string().required('Esse campo é obrigatório'),
                radio_field: Yup.object().shape({
                    teste1: Yup.string().required('Esse campo é obrigatório'),
                    teste2: Yup.string().required('Esse campo é obrigatório'),
                    teste3: Yup.string().required('Esse campo é obrigatório'),
                }),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                formRef.current.setErrors(getValidationErrors(err));
            }
        }
    }, []);
    return (
        <>
            <Header title="Questionário - Operação Transporte Escolar"></Header>
            <FormContentContainer
                title="Identificação da Escola"
                id="intendify-form"
                onSubmit={handleSubmit}
                reference={formRef}
            >
                {/* <UnformSelect
                    labelText="2) Código INEP da sua escola:"
                    name="codigo_inep"
                    options={[
                        { label: 'Comum', value: 'comum' },
                        { label: 'MedPUC', value: 'medpuc' },
                        {
                            label: 'Gestor de Ligas',
                            value: 'gestor_liga',
                        },
                        {
                            label: 'Gestor COLIG',
                            value: 'gestor_colig',
                        },
                        { label: 'Gestor Site', value: 'gestor_site' },
                        { label: 'Orientador', value: 'orientador' },
                        { label: 'Coordenador', value: 'coordenador' },
                    ]}
                    placeholder="Selecione uma Opção"
                /> */}
                {/* <UnformInputCheckboxField
                        labelText="7) Check a box please"
                        name="checkbox"
                        options={[
                            {
                                label:
                                    'Teste para ver um bom tamanho para uma pergunta ou afirmação aqui para as pessoas',
                                value: 'teste1',
                            },
                            {
                                label:
                                    'Teste para ver um bom tamanho para uma pergunta ou afirmação aqui para as pessoas',
                                value: 'teste2',
                            },
                            {
                                label:
                                    'Teste para ver um bom tamanho para uma pergunta ou afirmação aqui para as pessoas',
                                value: 'teste3',
                            },
                        ]}
                    /> */}
                <UnformInputText
                    labelText="1) Nome da Escola:"
                    name="1_nome_escola"
                />
                <UnformInputText
                    labelText="2) Código INEP da sua escola:"
                    name="2_codigo_inep"
                />
                <UnformInputText
                    labelText="3) Município:"
                    name="3_nome_munincipio"
                />
                <UnformInputText labelText="4) Estado:" name="4_nome_estado" />

                <UnformInputRadio
                    labelText="5) Sua escola é:"
                    name="5_tipo_escola"
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

                <UnformInputRadioField
                    labelText="6) Avalie em (ótimo, bom, regular, ruim ou péssimo) os itens listados abaixo relacionados com a operação do transporte escolar de seu município:"
                    name="6_primeira_avalicao"
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

                <UnformInputRadioField
                    labelText="7) Avalie em (muito importante, importante, moderadamente importante, pouco importante, sem importância) os itens listados abaixo relacionados com o impacto do transporte escolar na educação:"
                    name="7_segunda_avalicao"
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
                            label:
                                'Impacto do Transporte Escolar na aprovação escolar dos alunos',
                            name: 'resposta_1',
                        },
                        {
                            label:
                                'Impacto do Transporte Escolar na evasão dos alunos',
                            name: 'resposta_2',
                        },
                        {
                            label:
                                'Impacto do Transporte Escolar na distorção idade-série',
                            name: 'resposta_3',
                        },
                        {
                            label:
                                'Impacto do Transporte Escolar na reprovação dos alunos',
                            name: 'resposta_4',
                        },
                        {
                            label:
                                'Impacto do Transporte Escolar no abandono das escolas por parte dos alunos',
                            name: 'resposta_5',
                        },
                        {
                            label:
                                'Impacto do Transporte Escolar no desempenho escolar dos alunos residentes em área rural',
                            name: 'resposta_6',
                        },
                        {
                            label:
                                'Impacto do Transporte Escolar no desempenho escolar dos alunos residentes em área urbana',
                            name: 'resposta_7',
                        },
                    ]}
                />
                <UnformInputText
                    labelText="8) Indique pelo menos outros 3 pontos positivos que julgue importante destacar, relacionados com a operação do transporte escolar em seu município."
                    name="8_pontos_positivos"
                />
                <UnformInputText
                    labelText="9) Indique pelo menos outros 3 pontos negativos que julgue importante destacar, relacionados com a operação do transporte escolar em seu município."
                    name="9_pontos_negativos"
                />
            </FormContentContainer>
            <button type="submit" form="intendify-form">
                Enviar
            </button>
        </>
    );
}
