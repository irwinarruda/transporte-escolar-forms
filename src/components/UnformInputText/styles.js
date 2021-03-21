import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-width: 100%;

    label {
        display: block;
        font-size: 16px;
    }

    input {
        display: block;
        max-width: ${(props) => (props.bigTextField ? '100%' : '330px')};
        width: 100%;
        margin-top: 22px;
        padding: 6px 10px 6px 10px;

        font-size: 14px;
        border-radius: 3px;
        border: 2px solid rgba(0, 0, 0, 0.3);

        transition: all 0.2s ease-in;

        &:focus {
            outline: none;
            border-color: var(--color-yellow);
        }
    }

    span {
        min-height: 20px;
        display: block;
        margin-top: 5px;
        border-bottom: 2px solid var(--color-blue);

        color: var(--color-red);
        font-weight: 500;
        font-family: var(--font-primary);
        font-size: 14px;
    }
`;
