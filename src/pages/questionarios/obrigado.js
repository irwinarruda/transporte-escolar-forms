import Link from 'next/link';
import React from 'react';
import Confetti from 'react-confetti';
import { ReactSVG } from 'react-svg';
import Header from '../../layouts/Header';
import { useWindowDimensions } from '../../hooks/Window';
import { ObrigadoContainer } from '../../styles/style-questionario';

export default function Obrigado() {
    const { width, height } = useWindowDimensions();
    return (
        <>
            <Confetti
                width={width}
                height={height}
                recycle={false}
                numberOfPieces={400}
            />
            <Header>
                <ObrigadoContainer>
                    <div className="obrigado">
                        <h1 style={{ fontFamily: 'var(--font-secondary)' }}>
                            Obrigado por responder nosso questionário!
                        </h1>
                        <div className="obrigado-img">
                            <ReactSVG src="/illustration/form-send.svg" />
                        </div>
                        <div className="obrigado-description">
                            <h4>
                                Problemas ou Sugestões devem ser enviados ao
                                email: <u>cpliufg@fnde.gov.br</u>
                            </h4>
                            <Link href="/questionarios">
                                <a>
                                    Clique aqui para responder outros
                                    questionários
                                </a>
                            </Link>
                        </div>
                    </div>
                </ObrigadoContainer>
            </Header>
        </>
    );
}
