import React from 'react';
import { Container, TextField } from './styles';
import UnformInputText from '../UnformInputText';

export default function UnformInputTextField({
    labelText,
    name,
    options,
    ...props
}) {
    return (
        <Container>
            <p>{labelText}</p>
            <TextField>
                {options.map((option, index) => (
                    <UnformInputText
                        key={index}
                        labelText={option.label}
                        name={`${name}.${option.value}`}
                        {...props}
                    />
                ))}
            </TextField>
        </Container>
    );
}
