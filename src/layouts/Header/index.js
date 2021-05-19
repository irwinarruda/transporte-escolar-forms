import React from 'react';
import { Container } from './styles';

export default function Header({ children, title }) {
    return (
        <Container>
            <div className="header-bar"></div>
            {title && <h1>{title}</h1>}
            {children}
        </Container>
    );
}
