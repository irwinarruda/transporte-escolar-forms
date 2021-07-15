import React from 'react';
import { useField } from '@unform/core';
import { Container, RadioField, RadioItem } from './styles';

export default function UnformInputRadio({
    name,
    labelText,
    options,
    other = false,
    setRadioValue = () => {},
    ...props
}) {
    const inputRefs = React.useRef([]);
    const [otherValue, setOtherValue] = React.useState('');
    const { fieldName, registerField, defaultValue = '', error } = useField(
        name,
    );
    React.useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRefs,
            getValue: (refs) => {
                return (
                    refs.current.find((input) => input?.checked)?.value || ''
                );
            },
            setValue: (refs, id) => {
                const inputRef = refs.current.find((ref) => {
                    return ref.id === id;
                });
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
        <Container hasError={error !== undefined}>
            <p
                dangerouslySetInnerHTML={{ __html: labelText }}
                role="heading"
                id={`form-heading-${name}`}
            ></p>
            <div className="input-field">
                <RadioField
                    onChange={(e) => {
                        setRadioValue(e.target.value);
                    }}
                    aria-labelledby={`#form-heading-${name}`}
                    aria-required="true"
                    role="radiogroup"
                >
                    {options.map((option, index) => {
                        if (other && index + 1 === options.length) {
                            return (
                                <RadioItem
                                    key={option.value}
                                    htmlFor={`radio-value-${option.value}`}
                                >
                                    <input
                                        type="radio"
                                        ref={(ref) => {
                                            inputRefs.current[index] = ref;
                                        }}
                                        id={`radio-value-${option.value}`}
                                        name={name}
                                        defaultChecked={defaultValue.includes(
                                            option.value,
                                        )}
                                        value={otherValue}
                                        {...props}
                                    />
                                    <span></span>
                                    <input
                                        type="text"
                                        value={otherValue}
                                        onChange={(event) =>
                                            setOtherValue(event.target.value)
                                        }
                                        placeholder="Outro..."
                                        onClick={() => {
                                            inputRefs.current[
                                                index
                                            ].checked = true;
                                        }}
                                    />
                                </RadioItem>
                            );
                        }
                        return (
                            <RadioItem
                                key={option.value}
                                htmlFor={`radio-value-${option.value}`}
                            >
                                <input
                                    type="radio"
                                    ref={(ref) => {
                                        inputRefs.current[index] = ref;
                                    }}
                                    id={`radio-value-${option.value}`}
                                    name={name}
                                    defaultChecked={defaultValue.includes(
                                        option.value,
                                    )}
                                    value={option.value}
                                    {...props}
                                />
                                <span></span>

                                <>{option.label || null}</>
                            </RadioItem>
                        );
                    })}
                </RadioField>
                <span className="input-error-message">{error}</span>
            </div>
        </Container>
    );
}
