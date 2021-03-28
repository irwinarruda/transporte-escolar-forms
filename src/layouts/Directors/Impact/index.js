import React from 'react';
import { Form } from '@unform/web';

import { ValidationError } from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import { directors_impact } from '../../../utils/validationSchemas';

import ButtonGoTo from '../../../components/Buttons/ButtonGoTo';
import UnformInputRadioField from '../../../components/Inputs/UnformInputRadioField';

export default function SchoolId({ page, setPage, formData, setFormData }) {
    const formRef = React.useRef(null);

    const handleSubmit = React.useCallback(
        async (data) => {
            try {
                formRef.current.setErrors({});
                await directors_impact.validate(data, {
                    abortEarly: false,
                });
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
        setPage('operation');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [setPage]);
    return (
        <>
            <div className="form-content-container">
                <div className="form-content-bar"></div>
                <h2>Análise da Percepção - Impacto</h2>
                <Form
                    id="impact_form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={formData}
                >
                    <UnformInputRadioField
                        labelText="7) Avalie em (muito importante, importante, moderadamente importante, pouco importante, sem importância) os itens listados abaixo relacionados com o impacto do transporte escolar na educação:"
                        name="form_7_segunda_avalicao"
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
                </Form>
            </div>
            <div className="form_content_buttons">
                <ButtonGoTo type="text" onClick={handleGoBackClick}>
                    Voltar
                </ButtonGoTo>
                <ButtonGoTo type="submit" form="impact_form">
                    Próximo
                </ButtonGoTo>
            </div>
        </>
    );
}
