import styled from "styled-components";

const RegisterContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 162px;
        height: 100px;
    }

    h1 {
        font-family: 'Playball', cursive;
        font-size: 68px;
        color: #126BA5;
        margin-bottom: 32px;
    }
    
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input {
            font-size: 20px;
            font-weight: 400;
            width: 80%;
            height: 45px;
            margin-bottom: 8px;
            border-radius: 5px;
            border: 1px solid #D5D5D5;
            border-radius: 6px;
            padding: 0 12px;
            &::placeholder {
                color: #DBDBDB;
            }
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80%;
            height: 45px;
            background-color: #52B6FF;
            color: #FFFFFF;
            border: 1px solid #52B6FF;
            border-radius: 5px;
            font-size: 20px;
            font-weight: 400;
        }
    }

    a {
        margin-top: 18px;

        p {
            font-weight: 400;
            font-size: 14px;
            color: #52B6FF;
            text-decoration: underline;
        }
    }
    
`

export default RegisterContainer