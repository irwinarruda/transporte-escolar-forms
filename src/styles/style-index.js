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
