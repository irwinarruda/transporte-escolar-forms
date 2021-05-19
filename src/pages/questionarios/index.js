import Link from 'next/link';
import { HeaderContainer } from '../../styles/style-questionario';
import Header from '../../layouts/Header';
import { api, FORMS_GET } from '../../services/questionariosApi';

export default function Questionarios({ data }) {
    return (
        <>
            <Header title="Questionários Disponíveis para Resposta">
                <HeaderContainer>
                    <h2>Escolha uma das Opções:</h2>
                    <ul className="header-list">
                        {data.length > 0 &&
                            data.map((item) => (
                                <li key={item.id}>
                                    <Link href={`/questionarios/${item.id}`}>
                                        <a>{item.titulo}</a>
                                    </Link>
                                </li>
                            ))}
                    </ul>
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
