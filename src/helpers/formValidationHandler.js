import * as Yup from 'yup';

export const formValidations = new Map();
formValidations.set('1', validateInputRadio);
formValidations.set('2', validateInputCheckboxField);
formValidations.set('3', validateInputText);
formValidations.set('4', validateTextArea);
formValidations.set('5', validateInputRadioField);
formValidations.set('6', validateSelect);
formValidations.set('8', validateInputTextField);
formValidations.set('9', validateInputTextSearch);
formValidations.set('10', validateInputNumberField);
formValidations.set('11', validateInputNumber);

export function makeValidationSchema(data, blockedFields) {
    const validationSchema = {};
    data.forEach((formItem) => {
        if (blockedFields.indexOf(formItem.id_pergunta) === -1) {
            if (formValidations.get(formItem.tipo)) {
                validationSchema[
                    `form_${formItem.id_pergunta}`
                ] = formValidations.get(formItem.tipo)(formItem, blockedFields);
            }
        }
    });
    return Yup.object().shape(validationSchema);
}

export function validateInputRadio(formItem) {
    return Yup.string().required('Este campo deve ser preenchido');
}
export function validateInputCheckboxField(formItem) {
    Yup.string().required('Este campo deve ser preenchido');
}
export function validateInputText(formItem) {
    return Yup.string().required('Este campo deve ser preenchido');
}
export function validateInputNumber(formItem) {
    return Yup.string().required('Este campo deve ser preenchido');
}
export function validateTextArea(formItem) {
    return Yup.string().required('Este campo deve ser preenchido');
}
export function validateInputRadioField(formItem) {
    const res_obj = {};
    formItem.itens.forEach((item) => {
        res_obj[`res_${item.id_pergunta}`] = Yup.string().required(
            'Este campo deve ser preenchido',
        );
    });
    return Yup.object().shape(res_obj);
}
export function validateSelect(formItem) {
    return Yup.string().required('Este campo deve ser preenchido');
}
export function validateInputTextField(formItem, blockedFields) {
    const res_obj = {};
    formItem.itens
        .filter((item) => !blockedFields.includes(item.id_pergunta))
        .forEach((item) => {
            res_obj[`res_${item.id_pergunta}`] = Yup.string().required(
                'Este campo deve ser preenchido',
            );
        });
    return Yup.object().shape(res_obj);
}
export function validateInputNumberField(formItem, blockedFields) {
    const res_obj = {};
    formItem.itens
        .filter((item) => !blockedFields.includes(item.id_pergunta))
        .forEach((item) => {
            res_obj[`res_${item.id_pergunta}`] = Yup.string().required(
                'Este campo deve ser preenchido',
            );
        });
    return Yup.object().shape(res_obj);
}
export function validateInputTextSearch(formItem) {
    return Yup.string().required('Este campo deve ser preenchido');
}
