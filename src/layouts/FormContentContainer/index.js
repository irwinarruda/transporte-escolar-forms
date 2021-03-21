import React from 'react';
import { Form } from '@unform/web';
import { Container } from './styles';

export default function FormContentContainer({
    children,
    title,
    reference,
    ...props
}) {
    return (
        <Container>
            <div className="form-content-bar"></div>
            <h2>{title}</h2>
            <Form {...props} ref={reference}>
                {children}
            </Form>
        </Container>
    );
}
