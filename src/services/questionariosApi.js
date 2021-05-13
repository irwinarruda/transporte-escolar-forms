import axios from 'axios';

export const AUTH_TOKEN = `${process.env.NEXT_PUBLIC_BASE_TOKEN}`;

export const BASE_URL = 'http://localhost:8080';
//export const BASE_URL = 'http://pesquisaufg.umarleyricardo.eti.br';

export const api = axios.create({
    baseURL: BASE_URL,
});

export const FORMS_GET = () => {
    return {
        method: 'get',
        url: `/questionarios`,
        headers: {
            Authorization: AUTH_TOKEN,
        },
    };
};

export const FORMS_GET_ONE = (id_forms) => {
    return {
        method: 'get',
        url: `/questionarios/perguntas/${id_forms}`,
        headers: {
            Authorization: AUTH_TOKEN,
        },
    };
};

export const FORMS_SEND = (body) => {
    return {
        method: 'post',
        url: `/respostas`,
        headers: {
            Authorization: AUTH_TOKEN,
        },
        data: body,
    };
};
