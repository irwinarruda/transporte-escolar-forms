import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 10px 25px;
    color: var(--color-blue);
    font-weight: 500;

    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    background-color: var(--color-yellow);
    border: none;
    border-radius: 5px;
    transition: all 0.1s linear;

    &:hover {
        background-color: #ffe569;
    }
`;
