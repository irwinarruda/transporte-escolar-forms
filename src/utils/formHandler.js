import React from 'react';
import UnformInputCheckbox from '../components/Inputs/UnformInputCheckbox';
import UnformInputCheckboxField from '../components/Inputs/UnformInputCheckboxField';
import UnformInputRadio from '../components/Inputs/UnformInputRadio';
import UnformInputRadioField from '../components/Inputs/UnformInputRadioField';
import UnformInputText from '../components/Inputs/UnformInputText';
import UnformInputTextField from '../components/Inputs/UnformInputTextField';
import UnformSelect from '../components/Inputs/UnformSelect';
import ReactSelectInput from '../components/Inputs/ReactSelectInput';
import UnformTextArea from '../components/Inputs/UnformTextArea';

export const formFunctions = new Map();
formFunctions.set('1', createInputRadio);
formFunctions.set('2', createInputCheckboxField);
formFunctions.set('3', createInputText);
formFunctions.set('4', createTextArea);
formFunctions.set('5', createInputRadioField);
formFunctions.set('6', createSelect);
formFunctions.set('8', createInputTextField);

export function handleMostrar(mostrar) {
    let mostrarTreated = mostrar.split('/');
    mostrarTreated[1] = mostrarTreated[1].split(',');
    return mostrarTreated;
}

export function createInputRadio(formItem) {
    if (formItem.mostrar) {
        const [field, values] = handleMostrar(formItem.mostrar);
        //console.log(document.querySelector(`form_${field}`).value);
    }
    return (
        <UnformInputRadio
            key={formItem.id_pergunta}
            labelText={formItem.enunciado}
            name={`form_${formItem.id_pergunta}`}
            options={formItem.opcoes.map((item) => ({
                value: item.id,
                label: item.texto,
            }))}
        />
    );
}
export function createInputCheckboxField(formItem) {
    if (formItem.mostrar) {
        const [field, values] = handleMostrar(formItem.mostrar);
        //console.log(document.querySelector(`form_${field}`).value);
    }
    return (
        <UnformInputCheckboxField
            key={formItem.id_pergunta}
            labelText={formItem.enunciado}
            name={`form_${formItem.id_pergunta}`}
            options={formItem.opcoes.map((item) => ({
                value: item.id,
                label: item.texto,
            }))}
        />
    );
}
export function createInputText(formItem) {
    if (formItem.mostrar) {
        const [field, values] = handleMostrar(formItem.mostrar);
        //console.log(document.querySelector(`form_${field}`).value);
    }
    return (
        <UnformInputText
            key={formItem.id_pergunta}
            labelText={formItem.enunciado}
            name={`form_${formItem.id_pergunta}`}
            bigTextField
        />
    );
}
export function createTextArea(formItem) {
    if (formItem.mostrar) {
        const [field, values] = handleMostrar(formItem.mostrar);
        //console.log(document.querySelector(`form_${field}`).value);
    }
    return (
        <UnformTextArea
            key={formItem.id_pergunta}
            labelText={formItem.enunciado}
            name={`form_${formItem.id_pergunta}`}
            bigTextField
        />
    );
}
export function createInputRadioField(formItem) {
    if (formItem.mostrar) {
        const [field, values] = handleMostrar(formItem.mostrar);
        //console.log(document.querySelector(`form_${field}`).value);
    }
    return (
        <UnformInputRadioField
            key={formItem.id_pergunta}
            labelText={formItem.enunciado}
            name={`form_${formItem.id_pergunta}`}
            fieldValues={formItem.colunas.map((item) => ({
                label: item.texto,
                value: item.id,
            }))}
            options={formItem.itens.map((item) => ({
                label: item.enunciado,
                name: `${item.sub_id.replace('.', ',')}`,
            }))}
        />
    );
}
export function createSelect(formItem) {
    if (formItem.mostrar) {
        const [field, values] = handleMostrar(formItem.mostrar);
        //console.log(document.querySelector(`form_${field}`).value);
    }
    return (
        <UnformSelect
            key={formItem.id_pergunta}
            labelText={formItem.enunciado}
            name={`form_${formItem.id_pergunta}`}
            options={[{ label: 'Olá mundo', value: '1' }]}
        />
    );
}
export function createInputTextField(formItem) {
    if (formItem.mostrar) {
        const [field, values] = handleMostrar(formItem.mostrar);
        //console.log(document.querySelector(`form_${field}`).value);
    }
    return (
        <UnformInputTextField
            key={formItem.id_pergunta}
            labelText={formItem.enunciado}
            name={`form_${formItem.id_pergunta}`}
            options={formItem.itens.map((item) => ({
                label: item.enunciado,
                value: item.sub_id,
            }))}
        />
    );
}
