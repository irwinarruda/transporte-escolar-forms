import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    padding: 20px;

    label {
        display: block;
        font-size: 16px;
    }

    .input-field {
        width: 100%;
        display: block;
        margin-top: 22px;
        textarea {
            resize: none;
            display: block;
            max-width: ${(props) =>
                props.bigTextField ? '100%' : 'var(--input-field-width)'};
            width: 100%;
            height: 80px;
            padding: 6px 10px 6px 10px;

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
