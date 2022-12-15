import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    p {
        font-family: 'Playball', cursive;
        font-size: 40px;
        font-weight: 400;
        color: #FFFFFF;
        margin-left: 18px;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98px;
        margin-right: 18px;
    }
`

export default Header