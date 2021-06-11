import React from 'react';
import { useField } from '@unform/core';
import { SelectField, SelectOptionContainer } from './styles';
import { ReactSVG } from 'react-svg';
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
    const [loading, setLoading] = React.useState(false);
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
        setLoading(true);
        setOptions([]);
        const newOptions = await optionsFetch();
        setOptions(newOptions);
        setLoading(false);
    }, [setOptions]);

    return (
        <SelectOptionContainer hasError={error !== undefined}>
            <label
                className="label-system"
                htmlFor={name}
                dangerouslySetInnerHTML={{ __html: labelText }}
            ></label>
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
                        noOptionsMessage={() =>
                            loading ? (
                                <ReactSVG src="/svg/spinner.svg" />
                            ) : (
                                'Nenhum dado carregado'
                            )
                        }
                        {...props}
                    />
                </div>
                <span className="input-error-message">{error}</span>
            </SelectField>
        </SelectOptionContainer>
    );
}
