import styled from 'styled-components';

export const Container = styled.label`
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

        border-radius: 5px;
        border: 2px solid var(--color-yellow);
        background-color: var(--color-white);
        transition: all 0.1s linear;

        &:after {
            content: '';
            position: absolute;
            display: none;
            transition: all 0.2s linear;
        }
    }

    &:hover {
        span {
            background-color: var(--color-white);
        }
    }

    & > input:checked ~ span {
        background-color: var(--color-blue);

        &:after {
            display: initial;
            right: 50%;
            bottom: 50%;
            transform: translateY(50%) translateX(50%) rotate(45deg);

            width: 5px;
            height: 10px;
            margin-bottom: 2px;

            border: solid white;
            border-width: 0 3px 3px 0;
        }
    }
`;
