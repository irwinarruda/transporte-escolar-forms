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
