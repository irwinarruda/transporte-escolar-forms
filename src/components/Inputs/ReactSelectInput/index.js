import React from 'react';
import { useField } from '@unform/core';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
    Selecta,
    Option,
    SelectField,
    FalseInput,
    SelectOptionContainer,
} from './styles';
import ReactSelect from 'react-select';

export default function ReactSelectInput({
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
            getValue: (ref) => {
                if (props.isMulti) {
                    if (!ref.state.value) {
                        return [];
                    }
                    return ref.state.value.map((option) => option.value);
                }
                if (!ref.state.value) {
                    return '';
                }
                return ref.state.value.value;
            },
        });
    }, [fieldName, registerField, props.isMulti]);

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

    const handleFocus = React.useCallback(() => {});

    const handleSelectClick = React.useCallback(() => {
        setToggleOptions((prev) => !prev);
    }, [setToggleOptions]);

    return (
        <SelectOptionContainer {...props}>
            <label className="label-system" htmlFor={name}>
                {labelText}
            </label>
            <SelectField ref={componentRef}>
                <div className="input-field">
                    <ReactSelect
                        defaultValue={defaultValue}
                        ref={selectRef}
                        classNamePrefix="react-select"
                        options={options}
                        inputId={name}
                        loadingMessage="Procurando dados"
                        noOptionsMessage={() => 'Nenhum dado carregado'}
                        {...props}
                    />
                </div>
                <span>{error}</span>
            </SelectField>
        </SelectOptionContainer>
    );
}
