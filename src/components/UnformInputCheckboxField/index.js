import React from 'react';
import { useField } from '@unform/core';
import UnformInputCheckbox from '../UnformInputCheckbox';
import { Container, CheckboxField, CheckboxItem } from './styles';

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
                        name={name}
                        options={option}
                        {...props}
                    />
                ))}
            </CheckboxField>
        </Container>
    );
}
