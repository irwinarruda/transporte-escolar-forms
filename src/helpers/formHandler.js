import React from 'react';
import { api, AUTH_TOKEN } from '../services/questionariosApi';
import { useErrorHandler } from '../hooks/Error';
import UnformInputCheckbox from '../components/Inputs/UnformInputCheckbox';
import UnformInputCheckboxField from '../components/Inputs/UnformInputCheckboxField';
import UnformInputRadio from '../components/Inputs/UnformInputRadio';
import UnformInputRadioField from '../components/Inputs/UnformInputRadioField';
import UnformInputText from '../components/Inputs/UnformInputText';
import UnformInputTextField from '../components/Inputs/UnformInputTextField';
import UnformSelect from '../components/Inputs/UnformSelect';
import UnformSelectFetch from '../components/Inputs/UnformSelectFetch';
import UnformTextArea from '../components/Inputs/UnformTextArea';

export const formFunctions = new Map();
formFunctions.set('1', CreateInputRadio);
formFunctions.set('2', CreateInputCheckboxField);
formFunctions.set('3', CreateInputText);
formFunctions.set('4', CreateTextArea);
formFunctions.set('5', CreateInputRadioField);
formFunctions.set('6', CreateSelect);
formFunctions.set('8', CreateInputTextField);

export function handleMostrar(mostrar) {
    let mostrarTreated = mostrar.split(';');
    mostrarTreated.forEach((item, index) => {
        mostrarTreated[index] = item.split('/');
        mostrarTreated[index][1] = mostrarTreated[index][1].split(',');
    });
    return mostrarTreated;
}

export function ValidationContainer({ children, blockedFields, formItem }) {
    let isBlocked = false;
    blockedFields.forEach((item) => {
        if (item === formItem.id_pergunta) {
            isBlocked = true;
        }
    });

    return !isBlocked && <>{children}</>;
}

export function CreateInputRadio({
    formItem,
    blockedFields,
    setBlockedFields,
}) {
    const [radioValue, setRadioValue] = React.useState('');
    React.useEffect(() => {
        if (formItem.mostrar) {
            const treatedMostrar = handleMostrar(formItem.mostrar);
            var blockedItems = [];
            let i, j;
            treatedMostrar.forEach((item) => {
                if (radioValue === item[0]) {
                    blockedItems = [...item[1]];
                }
                let mostrarArr = [...item[1]];
                let blockedArr = [...blockedFields];
                let blockedLength = blockedFields.length;

                for (i = 0; i < blockedLength; i++) {
                    let mostrarLength = mostrarArr.length;
                    if (mostrarLength === 0) break;
                    for (j = 0; j < mostrarLength; j++) {
                        if (blockedArr[i] === mostrarArr[j]) {
                            blockedArr.splice(i, 1);
                            mostrarArr.splice(j, 1);
                            //break;
                        }
                    }
                }
                console.log('blockedArr: ', blockedArr);
                setBlockedFields(blockedArr);
            });
            console.log('blockedItems: ', blockedItems);
            setBlockedFields((prev) => [...prev, ...blockedItems]);
        }
    }, [radioValue]);
    return (
        <ValidationContainer blockedFields={blockedFields} formItem={formItem}>
            <UnformInputRadio
                labelText={formItem.enunciado}
                name={`form_${formItem.id_pergunta}`}
                options={formItem.opcoes.map((item) => ({
                    value: item.id,
                    label: item.texto,
                }))}
                setRadioValue={setRadioValue}
            />
        </ValidationContainer>
    );
}
export function CreateInputCheckboxField({
    formItem,
    blockedFields,
    setBlockedFields,
}) {
    return (
        <ValidationContainer blockedFields={blockedFields} formItem={formItem}>
            <UnformInputCheckboxField
                labelText={formItem.enunciado}
                name={`form_${formItem.id_pergunta}`}
                options={formItem.opcoes.map((item) => ({
                    value: `res_${item.id}`,
                    label: item.texto,
                }))}
            />
        </ValidationContainer>
    );
}
export function CreateInputText({ formItem, blockedFields, setBlockedFields }) {
    return (
        <ValidationContainer blockedFields={blockedFields} formItem={formItem}>
            <UnformInputText
                labelText={formItem.enunciado}
                name={`form_${formItem.id_pergunta}`}
                bigTextField
            />
        </ValidationContainer>
    );
}
export function CreateTextArea({ formItem, blockedFields, setBlockedFields }) {
    return (
        <ValidationContainer blockedFields={blockedFields} formItem={formItem}>
            <UnformTextArea
                labelText={formItem.enunciado}
                name={`form_${formItem.id_pergunta}`}
                bigTextField
            />
        </ValidationContainer>
    );
}
export function CreateInputRadioField({
    formItem,
    blockedFields,
    setBlockedFields,
}) {
    return (
        <ValidationContainer blockedFields={blockedFields} formItem={formItem}>
            <UnformInputRadioField
                labelText={formItem.enunciado}
                name={`form_${formItem.id_pergunta}`}
                fieldValues={formItem.colunas.map((item) => ({
                    label: item.texto,
                    value: item.id,
                }))}
                options={formItem.itens.map((item) => ({
                    label: item.enunciado,
                    name: `res_${item.id_pergunta}`,
                }))}
            />
        </ValidationContainer>
    );
}
export function CreateSelect({
    formItem,
    selectInputs,
    blockedFields,
    setBlockedFields,
}) {
    const errorHandler = useErrorHandler();
    const [selectValue, setSelectValue] = React.useState({
        label: 'Selecione uma Opção',
        value: '',
    });
    selectInputs[`select_${formItem.id_pergunta}`] = selectValue;
    async function handleSelectFetch() {
        try {
            let apiUrl = formItem.api;
            if (formItem.pai !== null) {
                const parent = selectInputs[`select_${formItem.pai}`];
                apiUrl = apiUrl.replace('{pai}', parent.value);
            }
            const response = await api.get(apiUrl, {
                headers: {
                    Authorization: AUTH_TOKEN,
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.data;
            return data.data;
        } catch (err) {
            errorHandler(err, { title: 'Erro ao buscar dados' });
        }
    }
    return (
        <ValidationContainer blockedFields={blockedFields} formItem={formItem}>
            <UnformSelectFetch
                labelText={formItem.enunciado}
                name={`form_${formItem.id_pergunta}`}
                optionsFetch={handleSelectFetch}
                selectValue={selectValue}
                setSelectValue={setSelectValue}
            />
        </ValidationContainer>
    );
}
export function CreateInputTextField({
    formItem,
    blockedFields,
    setBlockedFields,
}) {
    return (
        <ValidationContainer blockedFields={blockedFields} formItem={formItem}>
            <UnformInputTextField
                labelText={formItem.enunciado}
                name={`form_${formItem.id_pergunta}`}
                options={formItem.itens.map((item) => ({
                    label: item.enunciado,
                    value: `res_${item.id_pergunta}`,
                }))}
            />
        </ValidationContainer>
    );
}
