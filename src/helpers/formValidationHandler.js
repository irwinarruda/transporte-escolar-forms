import * as Yup from 'yup';

export const formValidations = new Map();
formValidations.set('1', validateInputRadio);
formValidations.set('2', validateInputCheckboxField);
formValidations.set('3', validateInputText);
formValidations.set('4', validateTextArea);
formValidations.set('5', validateInputRadioField);
formValidations.set('6', validateSelect);
formValidations.set('8', validateInputTextField);

export function makeValidationSchema(data) {
    const validationSchema = {};
    data.forEach((formItem) => {
        formValidations;
        validationSchema[`form_${formItem.id_pergunta}`] = formValidations.get(
            formItem.tipo,
        )(formItem);
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
export function validateInputTextField(formItem) {
    const res_obj = {};
    formItem.itens.forEach((item) => {
        res_obj[`res_${item.id_pergunta}`] = Yup.string().required(
            'Este campo deve ser preenchido',
        );
    });
    return Yup.object().shape(res_obj);
}