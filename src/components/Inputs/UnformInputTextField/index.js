import React from 'react';
import { Container, TextField } from './styles';
import UnformInputTextFieldAux from '../UnformInputTextFieldAux';

export default function UnformInputTextField({
    labelText,
    name,
    options,
    ...props
}) {
    const [hasError, setHasError] = React.useState(false);
    return (
        <Container hasError={hasError}>
            <p>{labelText}</p>
            <TextField>
                {options.map((option, index) => (
                    <UnformInputTextFieldAux
                        key={index}
                        labelText={option.label}
                        name={`${name}.${option.value}`}
                        setHasError={setHasError}
                        {...props}
                    />
                ))}
            </TextField>
        </Container>
    );
}
