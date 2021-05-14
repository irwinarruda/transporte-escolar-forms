import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 10px;
    background-color: #fcfcfc;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: none;

    label {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-width: 125px;
        max-width: 125px;
        font-size: 14px;
    }

    .input-field {
        width: 100%;
        margin-left: 10px;
        margin-top: 0px;
        display: block;
        & > input {
            display: block;
            max-width: ${(props) =>
                props.bigTextField ? '100%' : 'var(--input-field-width)'};
            width: 100%;
            padding: 6px 10px 6px 10px;

            font-size: 14px;
            border-radius: 3px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            background-color: #fcfcfc;
            border-top: none;

            transition: all 0.2s ease-in;

            &::placeholder {
                font-weight: 300;
            }

            &:focus {
                outline: none;
                border-color: var(--color-yellow);
            }
        }
        & > span {
            margin-top: 0px;
            margin-left: 0px;
            min-height: auto;
        }
    }
    & + div {
        margin-top: 20px;
    }
`;
