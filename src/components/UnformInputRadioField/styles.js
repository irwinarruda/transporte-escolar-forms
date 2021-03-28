import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    padding: 20px;
    .container-box-form {
        margin-top: 27px;
    }

    @media (max-width: 650px) {
        .container-box-form {
            overflow-x: auto;

            height: ${(props) =>
                props.formHeightRef.current
                    ? props.formHeightRef.current.offsetHeight
                    : 300}px;
            display: block;
            position: relative;
            .box-form {
                position: absolute;
                z-index: 20;
                width: 570px;
                top: 0px;
                left: 0px;
            }
        }
    }
`;

export const OptionsField = styled.div`
    display: flex;
    padding: 0px 7px;
    & > div {
        &:first-child {
            max-width: 125px;
            min-width: 125px;

            font-size: 14px;
            display: block;
        }
        &:last-child {
            display: flex;
            justify-content: space-between;
            margin-left: 10px;
            width: 100%;
            & > div {
                max-width: 90px;
                padding: 0px 10px;
                width: 100%;
                text-align: center;
                font-size: 14px;
            }
        }
    }
`;

export const RadioField = styled.div`
    margin-top: 10px;

    & > div {
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
                min-height: auto;
            }
        }

        & + div {
            margin-top: 20px;
        }
    }
`;
