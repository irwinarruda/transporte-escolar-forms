import React from 'react';
import axios from 'axios';
import { api, AUTH_TOKEN } from '../services/questionariosApi';
import { useErrorHandler } from '../hooks/Error';
import { useAlertModal } from '../hooks/AlertModal';
import UnformInputCheckbox from '../components/Inputs/UnformInputCheckbox';
import UnformSelect from '../components/Inputs/UnformSelect';
import UnformInputCheckboxField from '../components/Inputs/UnformInputCheckboxField';
import UnformInputRadio from '../components/Inputs/UnformInputRadio';
import UnformInputRadioField from '../components/Inputs/UnformInputRadioField';
import UnformInputText from '../components/Inputs/UnformInputText';
import UnformInputTextField from '../components/Inputs/UnformInputTextField';
import UnformSelectFetch from '../components/Inputs/UnformSelectFetch';
import UnformTextArea from '../components/Inputs/UnformTextArea';
import UnformInputTextSearch from '../components/Inputs/UnformInputTextSearch';

export const formFunctions = new Map();
formFunctions.set('1', CreateInputRadio);
formFunctions.set('2', CreateInputCheckboxField);
formFunctions.set('3', CreateInputText);
formFunctions.set('4', CreateTextArea);
formFunctions.set('5', CreateInputRadioField);
formFunctions.set('6', CreateSelect);
formFunctions.set('8', CreateInputTextField);
formFunctions.set('9', CreateInputTextSearch);

export function handleMostrar(mostrar) {
    let mostrarTreated = mostrar.split(';');
    mostrarTreated.forEach((item, index) => {
        mostrarTreated[index] = item.split('/');
        if (mostrarTreated[index][1] !== '') {
            mostrarTreated[index][1] = mostrarTreated[index][1].split(',');
        } else {
            mostrarTreated[index][1] = null;
        }
    });
    return mostrarTreated;
}

export function blockedFieldsCheck(blockedArr, mostrarArr) {
    let i, j;
    let blockedLength = blockedArr.length;
    if (mostrarArr !== null) {
        for (i = 0; i < blockedLength; i++) {
            let mostrarLength = mostrarArr.length;
            if (mostrarLength === 0) break;
            j = mostrarArr.indexOf(blockedArr[i]);
            if (j !== -1) {
                blockedArr.splice(i, 1);
                mostrarArr.splice(j, 1);
                i--;
            }
        }
    }
    return blockedArr;
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
            treatedMostrar.forEach((item) => {
                if (radioValue === item[0]) {
                    blockedItems = item[1] !== null ? [...item[1]] : null;
                }
                setBlockedFields((prev) => {
                    return blockedFieldsCheck(
                        [...prev],
                        item[1] !== null ? [...item[1]] : null,
                    );
                });
            });
            if (blockedItems !== null)
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
export function CreateSelect({ formItem, blockedFields, setBlockedFields }) {
    const { createModal } = useAlertModal();
    const errorHandler = useErrorHandler();

    const handleSelectFetch = React.useCallback(async () => {
        try {
            let apiUrl = formItem.api;
            if (formItem.pai !== null) {
                const parent = document.querySelector(`#form_${formItem.pai}`);
                if (!parent || !parent.hasAttribute('data-value')) {
                    createModal('warning', {
                        title: 'Preencha o campo anterior',
                    });
                    return;
                }
                apiUrl = apiUrl.replace(
                    '{pai}',
                    parent.getAttribute('data-value'),
                );
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
    }, [errorHandler, createModal, api]);
    return (
        <ValidationContainer blockedFields={blockedFields} formItem={formItem}>
            <UnformSelectFetch
                labelText={formItem.enunciado}
                name={`form_${formItem.id_pergunta}`}
                optionsFetch={handleSelectFetch}
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
export function CreateInputTextSearch({
    formItem,
    blockedFields,
    setBlockedFields,
}) {
    const errorHandler = useErrorHandler();
    const { createModal, clearModal } = useAlertModal();
    const inputRef = React.useRef(null);
    const [options, setOptions] = React.useState('');
    const handleSearchClick = React.useCallback(async () => {
        try {
            createModal();
            const url = formItem.api.replace(
                '{id}',
                inputRef.current.value || '0',
            );
            const response = await axios.get(url, {
                headers: {
                    Authorization: AUTH_TOKEN,
                },
            });
            const data = await response.data;
            if (data.result) {
                clearModal();
                setOptions(data.data.messages);
            } else {
                createModal('warning', {
                    title: 'Atenção',
                    text: data.data.messages,
                });
            }
        } catch (err) {
            errorHandler(err, { title: 'Oops' });
        }
    }, [setOptions]);
    return (
        <ValidationContainer blockedFields={blockedFields} formItem={formItem}>
            <UnformInputTextSearch
                inputRef={inputRef}
                labelText={formItem.enunciado}
                name={`form_${formItem.id_pergunta}`}
                handleSearchClick={handleSearchClick}
                options={options}
            />
        </ValidationContainer>
    );
}
