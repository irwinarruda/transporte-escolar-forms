import * as Yup from 'yup';

export const directors_schoolid = Yup.object().shape({
    form_1_nome_escola: Yup.string().required('Esse campo deve ser preenchido'),
    form_2_codigo_inep: Yup.string().required('Esse campo deve ser preenchido'),
    form_3_nome_munincipio: Yup.string().required(
        'Esse campo deve ser preenchido',
    ),
    form_4_nome_estado: Yup.string().required('Esse campo deve ser preenchido'),
    form_5_tipo_escola: Yup.string().required('Esse campo deve ser preenchido'),
});

export const directors_operation = Yup.object().shape({
    form_6_primeira_avalicao: Yup.object().shape({
        resposta_1: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_2: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_3: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_4: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_5: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_6: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_7: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_8: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_9: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_10: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_11: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_12: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_13: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_14: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_15: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_16: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_17: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_18: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_19: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_20: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_21: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_22: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_23: Yup.string().required('Esse campo deve ser preenchido'),
    }),
});

export const directors_impact = Yup.object().shape({
    form_7_segunda_avalicao: Yup.object().shape({
        resposta_1: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_2: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_3: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_4: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_5: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_6: Yup.string().required('Esse campo deve ser preenchido'),
        resposta_7: Yup.string().required('Esse campo deve ser preenchido'),
    }),
});

export const directors_open_questions = Yup.object().shape({
    form_8_pontos_positivos: Yup.string().required(
        'Esse campo deve ser preenchido',
    ),
    form_9_pontos_negativos: Yup.string().required(
        'Esse campo deve ser preenchido',
    ),
});
