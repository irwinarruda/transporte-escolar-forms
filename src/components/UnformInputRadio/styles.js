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

export const RadioField = styled.div`
    margin-top: 22px;
`;

export const RadioItem = styled.label`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-size: 14px;
    font-weight: 400;
    color: var(--color-black);
    user-select: none;
    cursor: pointer;

    & + label {
        margin-top: 17px;
    }
    input {
        width: 0px;
        height: 0px;
        visibility: hidden;
        opacity: 0;
    }
    span {
        min-width: 24px;
        min-height: 24px;
        margin-right: 12px;
        position: relative;

        border-radius: 50%;
        border: 2px solid var(--color-yellow);
        background-color: var(--color-white);
        transition: all 0.1s linear;

        &:after {
            transition: all 0.2s linear;
        }
    }

    &:hover {
        span {
            background-color: var(--color-white);
        }
    }

    & > input:checked ~ span {
        background-color: var(--color-white);
        &:after {
            content: '';
            display: block;
            position: absolute;
            right: 50%;
            bottom: 50%;
            transform: translateY(50%) translateX(50%);

            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: var(--color-blue);
        }
    }
`;
