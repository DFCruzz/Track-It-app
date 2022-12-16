import styled from "styled-components";

const Footer = styled.footer`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        p {
            font-weight: 400;
            font-size: 18px;
            color: #52B6FF;
            margin: 0 36px;
        }

        div {
            position: absolute;
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
            left: 37%;
            bottom: 20%
        }
    }
`

export default Footer