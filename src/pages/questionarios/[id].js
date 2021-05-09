import React from 'react';
import Header from '../../layouts/Header';
import { QuestionsContainer } from '../../styles/style-questionario';
import { api, FORMS_GET_ONE } from '../../services/questionariosApi';

import { Form } from '@unform/web';
import { formFunctions } from '../../utils/formHandler';
import ButtonGoTo from '../../components/Buttons/ButtonGoTo';

export default function Questionario({ data, idPage }) {
    /* const [data, setData] = React.useState([]);
    React.useEffect(() => {
        async function getData() {
            try {
                const response = await api(FORMS_GET_ONE(idPage));
                const data = await response.data;
                setData(data);
            } catch (err) {
                console.log({ ...err });
            }
        }
        getData();
    }, []); */
    function handleFormSubmit(data) {
        console.log(data);
    }
    return (
        <>
            <Header
                title={
                    data.titulo || 'Questionário - Operação Transporte Escolar'
                }
            />
            <QuestionsContainer>
                <div className="form-content-container">
                    <div className="form-content-bar"></div>
                    <Form onSubmit={handleFormSubmit} id="city_id_form">
                        {data.length > 0 &&
                            data.map((item) => {
                                let tipoFunction = formFunctions.get(item.tipo);
                                return tipoFunction(item);
                            })}
                    </Form>
                    <div className="form_content_buttons">
                        <ButtonGoTo type="text">Voltar</ButtonGoTo>
                        <ButtonGoTo type="submit" form="city_id_form">
                            Próximo
                        </ButtonGoTo>
                    </div>
                </div>
            </QuestionsContainer>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '1',
                    id: '2',
                },
            },
        ],
        fallback: 'blocking',
    };
}
export async function getStaticProps(context) {
    const response = await api(FORMS_GET_ONE(context.params.id));
    const data = await response.data;
    let realData = [];
    if (data.result) {
        realData = data.data;
    }
    return {
        props: {
            data: realData,
            idPage: context.params.id,
        },
        revalidate: 172800,
    };
}
