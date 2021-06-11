import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { useField } from '@unform/core';
import { Container } from './styles';

export default function UnformInputTextSearch({
    labelText,
    inputRef,
    name,
    handleSearchClick = () => {},
    options,
    bigTextField = false,
    ...props
}) {
    const { fieldName, defaultValue, error, registerField } = useField(name);

    React.useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container bigTextField={bigTextField} hasError={error !== undefined}>
            <label
                htmlFor={name}
                dangerouslySetInnerHTML={{ __html: labelText }}
            ></label>
            <div className="search-input-field">
                <div className="input-field">
                    <div className="input">
                        <input
                            defaultValue={defaultValue}
                            name={name}
                            id={name}
                            ref={inputRef}
                            {...props}
                        />
                        <FcSearch
                            size={24}
                            onClick={handleSearchClick}
                            color="var(--color-blue)"
                        />
                    </div>
                    <span className="input-error-message">{error}</span>
                </div>
                <div
                    className="search-field"
                    dangerouslySetInnerHTML={{ __html: options }}
                ></div>
            </div>
        </Container>
    );
}
