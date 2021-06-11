import React from 'react';
import UnformInputRadioFieldAux from '../UnformInputRadioFieldAux';
import { Container, RadioField, OptionsField } from './styles';

export default function UnformInputRadioField({
    name,
    labelText,
    fieldValues,
    options,
    ...props
}) {
    const [hasError, setHasError] = React.useState(false);
    const formHeightRef = React.useRef(null);
    const inputRadioValues = fieldValues.map((item) => {
        return {
            value: item.value,
        };
    });

    return (
        <Container formHeightRef={formHeightRef} hasError={hasError}>
            <p dangerouslySetInnerHTML={{ __html: labelText }}></p>
            <div className="container-box-form">
                <div className="box-form" ref={formHeightRef}>
                    <OptionsField>
                        <div></div>
                        <div>
                            {fieldValues.map((fieldValue, index) => (
                                <div key={index}>{fieldValue.label}</div>
                            ))}
                        </div>
                    </OptionsField>
                    <RadioField>
                        {options.map((option, index) => (
                            <UnformInputRadioFieldAux
                                key={index}
                                labelText={option.label}
                                name={`${name}.${option.name}`}
                                options={inputRadioValues}
                                setHasError={setHasError}
                                {...props}
                            />
                        ))}
                    </RadioField>
                </div>
            </div>
        </Container>
    );
}
