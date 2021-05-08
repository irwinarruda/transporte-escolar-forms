import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    padding: 20px;
`;

export const TextField = styled.div`
    margin-top: 20px;
    & > div {
        display: flex;
        align-items: center;
        padding: 20px 10px;
        background-color: #fcfcfc;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: none;

        & > label {
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
            margin-top: 0px;
            display: block;

            & > span {
                margin-top: 0px;
                margin-left: 0px;
                min-height: auto;
            }

            & > input {
                background-color: transparent;
            }
        }

        & + div {
            margin-top: 20px;
        }
    }
`;
