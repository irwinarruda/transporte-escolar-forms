import styled from 'styled-components';

export const HeaderContainer = styled.section`
    margin-top: 24px;
    width: 100%;

    h2 {
        font-size: 18px;
        width: 100%;
        display: block;
        text-align: left;
    }

    .header-list {
        margin-top: 25px;
        margin-bottom: 15px;
        li {
            list-style: disc;
            margin-left: 20px;

            & + li {
                margin-top: 5px;
            }

            & > a {
                font-size: 18px;
                font-weight: 400;
                color: var(--color-blue);
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .header-buttons {
        max-width: fit-content;
        width: 100%;
        margin: 50px auto 25px auto;
        display: block;

        a {
            user-select: none;
            font-size: 16px;
            font-weight: 600;
            color: var(--color-white);
            padding: 10px 20px;

            border: none;
            border-radius: 5px;
            background-color: var(--color-blue);
            text-transform: uppercase;
            transition: all 0.1s linear;

            & + a {
                margin-left: 20px;
            }

            &:hover {
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
            }
        }

        @media (max-width: 360px) {
            width: 100%;
            a {
                text-align: center;
                display: block;
                width: 190px;
                & + a {
                    margin-left: 0px;
                    margin-top: 15px;
                }
            }
        }
    }
`;

export const QuestionsContainer = styled.section`
    width: 100%;
    & > .form-content-container {
        max-width: var(--content-block-width);
        width: 100%;
        margin-top: 15px;
        padding: var(--padding-mobile);
        padding-top: 40px;
        position: relative;

        background-color: #ffffff;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;

        h2 {
            display: table;
            margin: 0 auto 45px auto;
            text-align: center;
            font-size: 20px;
            font-weight: 500;

            &:after {
                content: '';
                display: block;
                height: 1px;
                width: 100%;
                margin-top: 4px;
                background-color: var(--color-blue);
            }
        }

        .form-content-bar {
            width: 100%;
            height: 10px;
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: var(--color-yellow);
        }

        form {
            & > div {
                & + div {
                    margin-top: 50px;
                }
            }
        }
    }

    & > .form_content_buttons {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: 100%;
        margin-top: 20px;

        & > button {
            & + button {
                margin-left: 20px;
            }
        }
    }
`;

export const ObrigadoContainer = styled.section`
    padding: 30px;
    .obrigado {
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 1px var(--color-blue);

        h1 {
            width: 100%;
            display: block;
            text-align: center;
        }
        .obrigado-img {
            width: 100%;
            max-width: 340px;
            margin: 0 auto;
            svg {
                width: 100%;
                height: 100%;
                display: block;
            }
        }
        .obrigado-description {
            margin-top: 15px;
            h4 {
                text-align: center;
                width: 100%;
            }
            a {
                cursor: pointer;
                margin-top: 5px;
                text-align: center;
                width: 100%;
                display: block;

                font-size: 13px;
                transition: all 0.2 linear;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;
