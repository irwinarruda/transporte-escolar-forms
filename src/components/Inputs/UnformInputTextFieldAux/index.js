import React from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

export default function UnformInputTextFieldAux({
    labelText,
    name,
    bigTextField = false,
    setHasError = () => {},
    ...props
}) {
    const inputRef = React.useRef(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    React.useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    React.useEffect(() => {
        setHasError(error !== undefined);
    }, [error]);

    return (
        <Container bigTextField={bigTextField}>
            <label htmlFor={name}>{labelText}</label>
            <div className="input-field">
                <input
                    defaultValue={defaultValue}
                    name={name}
                    id={name}
                    ref={inputRef}
                    {...props}
                />
                <span className="input-error-message">{error}</span>
            </div>
        </Container>
    );
}
