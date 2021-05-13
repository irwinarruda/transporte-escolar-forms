import styled, { css } from 'styled-components';

export const SelectOptionContainer = styled.div`
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    padding: 20px;

    label {
        margin-bottom: 15px;
    }
`;

export const SelectField = styled.div`
    width: 100%;
    max-width: ${(props) =>
        props.bigTextField ? '100%' : 'var(--input-field-width)'};
    margin-top: 22px;
    position: relative;
    display: block;
    .input-field {
        width: 100%;

        span {
            min-height: 20px;
            display: block;
            margin-top: 5px;

            color: var(--color-red);
            font-weight: 500;
            font-family: var(--font-secondary);
            font-size: 14px;
        }
    }
`;

export const Input = styled.input`
    user-select: none;
    width: 100%;
    padding: 6px 40px 6px 10px;

    font-size: 14px;
    font-weight: 400;
    color: var(--color-black);

    border-radius: 3px;
    border: 1px solid;
    border-color: ${(props) =>
        props.toggleOptions ? 'var(--color-yellow)' : 'rgba(0, 0, 0, 0.3)'};
    border-top: none;

    transition: border 0.2s ease-in;

    &:focus {
        outline: none;
    }
`;

export const Select = styled.div`
    position: relative;
    width: 100%;

    .false-input {
    }

    .real-input {
        display: none;
    }

    svg {
        cursor: pointer;
        position: absolute;
        right: 0px;
        bottom: 50%;
        transform: translateY(50%);
        margin-right: 10px;
    }
`;

export const Option = styled.div`
    width: 100%;
    max-height: ${(props) => props.maxHeight || '350px'};
    overflow-y: auto;

    background-color: #fdfdfd;
    border: 1px solid rgba(0, 0, 0, 0.1);

    position: absolute;
    top: calc(100% - 25px);
    left: 0;
    z-index: 96;
    transition: all 0.1s linear;

    ${(props) =>
        props.toggleOptions
            ? 'visibility: initial; opacity: 1;'
            : 'visibility: hidden; opacity: 0;'}
    .options-option {
        cursor: pointer;
        user-select: none;
        padding: 7px 15px;
        font-size: 14px;
        font-weight: 300;
        font-family: var(--font-primary);

        & + .options-option {
            border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        &:hover {
            background-color: #e5e5e5;
        }
    }
`;
