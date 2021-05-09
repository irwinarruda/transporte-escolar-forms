import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://pesquisaufg.umarleyricardo.eti.br',
});

export const AUTH_TOKEN = '77fe56621e6df535a299db24688f67f6';
//process.env.NEXT_PUBLIC_BASE_TOKEN

export const GET_ESTADOS = () => {
    return {
        url: '/estados',
        method: 'get',
        headers: {
            Authorization: AUTH_TOKEN,
        },
    };
};

export const GET_MUNICIPIOS = (id_estado) => {
    return {
        url: `/municipios/estado/${id_estado}`,
        method: 'get',
        headers: {
            Authorization: AUTH_TOKEN,
        },
    };
};

export const GET_ESCOLAS = (id_municipio) => {
    return {
        url: `/escolas/buscar/a/${id_municipio}`,
        method: 'get',
        headers: {
            Authorization: AUTH_TOKEN,
        },
    };
};
