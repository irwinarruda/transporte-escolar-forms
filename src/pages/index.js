import Link from 'next/link';
import { HeaderContainer } from '../styles/style-index';
import Header from '../layouts/Header';

export default function Home() {
    return (
        <>
            <Header title="Questionário - Operação Transporte Escolar">
                <HeaderContainer>
                    <h2>Escolha uma das Opções:</h2>
                    <div className="header-buttons">
                        <Link href="/diretores">
                            <a>DIRETORES</a>
                        </Link>
                        <Link href="/gestores">
                            <a>GESTORES</a>
                        </Link>
                    </div>
                </HeaderContainer>
            </Header>
        </>
    );
}
