import React from 'react';
import Header from '../layouts/Header';
import Directors from '../layouts/Directors';

export default function Diretores() {
    return (
        <>
            <Header title="Questionário - Operação Transporte Escolar"></Header>
            <Directors />
        </>
    );
}

/* <UnformSelect
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
/> */

/* <UnformInputCheckboxField
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
/> */
