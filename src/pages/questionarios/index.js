import Link from 'next/link';
import { HeaderContainer } from '../../styles/style-index';
import Header from '../../layouts/Header';
import { api, FORMS_GET } from '../../services/questionariosApi';

export default function Questionarios({ data }) {
    return (
        <>
            <Header title="Questionários - Projeto Transporte Escolar">
                <HeaderContainer>
                    <h2>Escolha uma das Opções:</h2>
                    <div className="header-buttons">
                        {data.length > 0 &&
                            data.map((item) => (
                                <Link href={`/questionarios/${item.id}`}>
                                    <a>{item.titulo.split(' - ')[1]}</a>
                                </Link>
                            ))}
                    </div>
                </HeaderContainer>
            </Header>
        </>
    );
}

export async function getStaticProps() {
    const response = await api(FORMS_GET());
    const data = await response.data;
    let realData = [];
    if (data.result) {
        realData = data.data;
    }
    return {
        props: {
            data: realData,
        },
    };
}
