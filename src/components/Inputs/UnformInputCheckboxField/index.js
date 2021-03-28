import React from 'react';
import UnformInputCheckbox from '../UnformInputCheckbox';
import { Container, CheckboxField } from './styles';

export default function UnformInputCheckboxField({
    name,
    labelText,
    options,
    ...props
}) {
    return (
        <Container>
            <p>{labelText}</p>
            <CheckboxField>
                {options.map((option, index) => (
                    <UnformInputCheckbox
                        key={index}
                        name={`${name}.${option.value}`}
                        options={option}
                        {...props}
                    />
                ))}
            </CheckboxField>
        </Container>
    );
}
