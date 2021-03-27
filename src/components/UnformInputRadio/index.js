import React from 'react';
import { useField } from '@unform/core';
import { Container, RadioField, RadioItem } from './styles';

export default function UnformInputRadio({
    name,
    labelText,
    options,
    ...props
}) {
    const inputRefs = React.useRef([]);
    const { fieldName, registerField, defaultValue = '', error } = useField(
        name,
    );

    React.useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRefs,
            getValue: (refs) => {
                return refs.current.find((input) => input?.checked)?.value;
            },
            setValue: (refs, id) => {
                const inputRef = refs.current.find((ref) => ref.id === id);
                if (inputRef) inputRef.checked = true;
            },
            clearValue: (refs) => {
                const inputRef = refs.current.find(
                    (ref) => ref.checked === true,
                );
                if (inputRef) inputRef.checked = false;
            },
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            <p>{labelText}</p>
            <RadioField>
                {options.map((option, index) => (
                    <RadioItem key={option.value}>
                        <input
                            type="radio"
                            ref={(ref) => {
                                inputRefs.current[index] = ref;
                            }}
                            id={option.value}
                            name={name}
                            defaultChecked={defaultValue.includes(option.value)}
                            value={option.value}
                            {...props}
                        />
                        <span></span>
                        {option.label}
                    </RadioItem>
                ))}
            </RadioField>
            <span>{error}</span>
        </Container>
    );
}
