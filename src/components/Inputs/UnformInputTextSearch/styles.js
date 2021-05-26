import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    padding: 20px;

    ${(props) =>
        props.hasError &&
        css`
            box-shadow: 0px 0px 5px 1px var(--color-red);
        `}

    label {
        display: block;
        font-size: 16px;
    }

    .search-input-field {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        @media (max-width: 520px) {
            flex-direction: column;
            & > .input-field > .input {
                max-width: 100%;
            }
        }
    }

    .search-field {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        min-height: 50px;
        max-height: 120px;
        overflow-y: auto;

        margin-left: 5px;
        margin-top: 5px;
        padding: 5px 5px;
        background-color: #fcfcfc;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 5px;
    }

    .input-field {
        width: 100%;
        display: block;
        margin-top: 32px;
        .input {
            max-width: ${(props) => (props.bigTextField ? '100%' : '360px')};
            width: 100%;
            position: relative;
            svg {
                cursor: pointer;
                position: absolute;
                right: 7px;
                bottom: 50%;
                transform: translateY(50%);
            }
        }
        input {
            display: block;
            width: 100%;
            padding: 6px 35px 6px 10px;

            font-size: 14px;
            border-radius: 3px;
            border: 1px solid rgba(0, 0, 0, 0.3);
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
    }
`;
