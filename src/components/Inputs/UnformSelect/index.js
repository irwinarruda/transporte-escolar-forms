import React from 'react';
import { useField } from '@unform/core';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
    Select,
    Option,
    SelectField,
    FalseInput,
    SelectOptionContainer,
} from './styles';

export default function UnformSelect({
    labelText,
    options,
    name,
    placeholder,
    bigTextField = false,
    ...props
}) {
    const selectRef = React.useRef(null);
    const componentRef = React.useRef(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const [fieldText, setFieldText] = React.useState(
        placeholder || 'Selecione uma Opção',
    );
    const [fieldValue, setFieldValue] = React.useState('');
    const [toggleOptions, setToggleOptions] = React.useState(false);

    React.useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (
                componentRef.current &&
                !componentRef.current.contains(event.target)
            ) {
                setToggleOptions(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [componentRef]);

    const handleOptionChange = React.useCallback(
        (event) => {
            setFieldText(event.target.innerText);
            setFieldValue(event.target.getAttribute('aria-valuetext'));
            setToggleOptions(false);
        },
        [setFieldText, setFieldValue, setToggleOptions],
    );

    const handleSelectClick = React.useCallback(() => {
        setToggleOptions((prev) => !prev);
    }, [setToggleOptions]);

    return (
        <SelectOptionContainer {...props}>
            <label
                className="label-system"
                htmlFor={name}
                dangerouslySetInnerHTML={{ __html: labelText }}
            ></label>
            <SelectField ref={componentRef}>
                <div className="input-field">
                    <Select
                        bigTextField={bigTextField}
                        onClick={handleSelectClick}
                    >
                        <input
                            className="real-input"
                            defaultValue={defaultValue}
                            value={fieldValue}
                            onChange={(event) =>
                                setFieldValue(event.target.value)
                            }
                            name={name}
                            id={name}
                            ref={selectRef}
                            disabled={true}
                            {...props}
                        />
                        <FalseInput
                            toggleOptions={toggleOptions}
                            hasPlaceholder={placeholder === fieldText}
                        >
                            {fieldText}
                        </FalseInput>
                        <RiArrowDownSLine size={26} color="#5E7B9E" />
                    </Select>
                    <span>{error}</span>
                </div>
                <Option toggleOptions={toggleOptions}>
                    {options.map((option, index) => {
                        return (
                            <div
                                key={index}
                                className="options-option"
                                aria-valuetext={option.value}
                                onClick={handleOptionChange}
                            >
                                {option.label}
                            </div>
                        );
                    })}
                </Option>
            </SelectField>
        </SelectOptionContainer>
    );
}
