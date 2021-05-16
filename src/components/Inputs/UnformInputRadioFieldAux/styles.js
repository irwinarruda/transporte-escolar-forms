import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;

    display: flex;
    align-items: center;
    padding: 7px;
    background-color: #fcfcfc;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: none;

    & > p {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-width: 125px;
        max-width: 125px;
        font-size: 14px;
    }

    & > .input-field {
        width: 100%;
        margin-left: 10px;
        display: block;
        & > div {
            display: flex;
            justify-content: space-between;

            width: 100%;
            margin-top: 0px;
            & > label {
                display: flex;
                justify-content: center;

                max-width: 90px;
                padding: 0px 10px;
                width: 100%;
                margin: 0px;

                & > span {
                    margin: 0px;
                }
            }
        }

        & > span {
            margin-top: 0px;
            margin-left: 25px;
            min-height: auto;
        }
    }

    & + div {
        margin-top: 20px;
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
    input[type='radio'] {
        width: 0px;
        height: 0px;
        visibility: hidden;
        opacity: 0;
    }
    input[type='text'] {
        display: block;
        max-width: 70%;
        width: 100%;
        padding: 3px 10px 3px 10px;

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
