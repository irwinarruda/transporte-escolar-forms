import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    padding: 20px;

    & > span {
        min-height: 20px;
        display: block;
        margin-top: 5px;

        color: var(--color-red);
        font-weight: 500;
        font-family: var(--font-secondary);
        font-size: 14px;
    }
`;

export const CheckboxField = styled.div`
    margin-top: 22px;
`;
