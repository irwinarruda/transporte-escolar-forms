import styled from 'styled-components';

export const Container = styled.section`
    max-width: 620px;
    width: 100%;
    margin-top: 15px;
    padding: var(--padding-mobile);
    padding-top: 22px;
    position: relative;

    background-color: #ffffff;
    border: 2px solid var(--color-grey);
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
            height: 2px;
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
`;
