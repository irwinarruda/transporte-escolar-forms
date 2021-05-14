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
`;

export const TextField = styled.div`
    margin-top: 20px;
`;
