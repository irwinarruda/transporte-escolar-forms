import React from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

export default function UnformInputCheckbox({ name, options, ...props }) {
    const inputRefs = React.useRef();
    const { fieldName, registerField, defaultValue, error } = useField(
        `${name}.${options.value}`,
    );

    const defaultChecked = defaultValue === options.value;

    React.useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRefs,
            getValue: (ref) => {
                return ref.current.checked;
            },
            clearValue: (ref) => {
                ref.current.checked = defaultChecked;
            },
            setValue: (ref, value) => {
                ref.current.checked = value;
            },
        });
    }, [defaultValue, fieldName, registerField, defaultChecked]);

    return (
        <Container>
            <input
                type="checkbox"
                ref={inputRefs}
                id={options.value}
                name={`${name}.${options.value}`}
                defaultChecked={defaultChecked}
                value={options.value}
                {...props}
            />
            <span></span>
            {options.label}
        </Container>
    );
}
