import React from 'react';
import { ButtonContainer } from './styles';

export default function ButtonGoTo({ children, ...props }) {
    return <ButtonContainer {...props}>{children}</ButtonContainer>;
}
