import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 10px 25px;
    color: var(--color-yellow);
    font-weight: 500;

    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
        0 1px 3px 0 rgb(0 0 0 / 12%);
    background-color: var(--color-white);
    border: none;
    border-radius: 5px;
    transition: all 0.1s linear;

    &:hover {
        background-color: #fbfbfb;
    }
`;
