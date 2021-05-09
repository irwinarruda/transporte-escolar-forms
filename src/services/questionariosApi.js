import axios from 'axios';

export const AUTH_TOKEN = '77fe56621e6df535a299db24688f67f6';

//export const BASE_URL = 'http://localhost:8080';
export const BASE_URL = 'http://pesquisaufg.umarleyricardo.eti.br';

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
