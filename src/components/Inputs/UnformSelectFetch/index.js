import React from 'react';
import { useField } from '@unform/core';
import { SelectField, SelectOptionContainer } from './styles';
import ReactSelect from 'react-select';

export default function UnformSelectFetch({
    labelText,
    name,
    placeholder,
    bigTextField = false,
    optionsFetch,
    selectValue,
    setSelectValue,
    ...props
}) {
    const selectRef = React.useRef(null);
    const componentRef = React.useRef(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const [options, setOptions] = React.useState([]);

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

    const handleFocus = React.useCallback(async () => {
        const newOptions = await optionsFetch();
        setOptions(newOptions);
    }, [setOptions]);

    return (
        <SelectOptionContainer>
            <label className="label-system" htmlFor={name}>
                {labelText}
            </label>
            <SelectField
                ref={componentRef}
                hasValue={selectValue.value}
                bigTextField={bigTextField}
            >
                <div className="input-field">
                    <ReactSelect
                        value={selectValue}
                        onChange={(item) => setSelectValue(item)}
                        onFocus={handleFocus}
                        placeholder="Selecione uma Opção"
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
