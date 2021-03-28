import React from 'react';
import { ButtonContainer } from './styles';

export default function ButtonSend({ children, ...props }) {
    return <ButtonContainer {...props}>{children}</ButtonContainer>;
}
