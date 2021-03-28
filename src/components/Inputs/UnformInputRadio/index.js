import React from 'react';
import { useField } from '@unform/core';
import { Container, RadioField, RadioItem } from './styles';

export default function UnformInputRadio({
    name,
    labelText,
    options,
    other = false,
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
                return refs.current.find((input) => input?.checked)?.value;
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
        <Container>
            <p>{labelText}</p>
            <div className="input-field">
                <RadioField>
                    {options.map((option, index) => {
                        if (other && index + 1 === options.length) {
                            return (
                                <RadioItem key={option.value}>
                                    <input
                                        type="radio"
                                        ref={(ref) => {
                                            inputRefs.current[index] = ref;
                                        }}
                                        id={option.value}
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
                            <RadioItem key={option.value}>
                                <input
                                    type="radio"
                                    ref={(ref) => {
                                        inputRefs.current[index] = ref;
                                    }}
                                    id={option.value}
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
                <span>{error}</span>
            </div>
        </Container>
    );
}
