import React from 'react';
import { useField } from '@unform/core';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
    Select,
    Option,
    SelectField,
    Input,
    SelectOptionContainer,
} from './styles';

export default function UnformSelect({
    labelText,
    name,
    placeholder,
    handleChangeFunction,
    bigTextField = false,
    ...props
}) {
    const selectRef = React.useRef(null);
    const componentRef = React.useRef(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const [fieldText, setFieldText] = React.useState('');
    const [fieldValue, setFieldValue] = React.useState('');
    const [toggleOptions, setToggleOptions] = React.useState(false);
    const [options, setOptions] = React.useState([]);

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

    const handleInputChange = React.useCallback(
        async (event) => {
            setFieldText(event.target.value);
            setFieldValue('');
            setToggleOptions(true);
            try {
                const dataObj = await handleChangeFunction(event.target.value);
                setOptions(dataObj);
            } catch (err) {
            } finally {
            }
        },
        [setFieldText, setFieldValue, setToggleOptions],
    );

    return (
        <SelectOptionContainer>
            <label className="label-system" htmlFor={name}>
                {labelText}
            </label>
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
                        <Input
                            toggleOptions={toggleOptions}
                            value={fieldText}
                            onChange={handleInputChange}
                        />
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
