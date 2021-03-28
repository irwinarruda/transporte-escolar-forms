import styled from 'styled-components';

export const Container = styled.header`
    max-width: var(--content-block-width);
    width: 100%;
    padding: var(--padding-mobile);
    padding-top: 22px;
    position: relative;

    background-color: #ffffff;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;

    h1 {
        margin-bottom: 15px;
    }

    .header-bar {
        width: 100%;
        height: 10px;
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: var(--color-yellow);
    }
`;
