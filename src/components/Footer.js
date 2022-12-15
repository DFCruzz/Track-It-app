import styled from "styled-components";

const Footer = styled.footer`
    width: 100%;
    max-height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;

    p {
        font-weight: 400;
        font-size: 18px;
        color: #52B6FF;
    }

    div {
        height: 91px;
        width: 91px;
        border-radius: 90px;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #52B6FF; 
        margin-bottom: 10px;
    }

`

export default Footer