import styled from "styled-components";

const RoutineBox = styled.section`
    width: 90%;
    height: 94px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
    margin-bottom: 24px;

    div.content {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        margin-left: 12px;

        h2 {
            font-size: 20px;
            color: #666666;
            margin-bottom: 12px;
        }

        p {
            font-size: 13px;
            color: #666666;
        }
    }

    div.checkbox {
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #8FC549;    
        border-radius: 5px;
        margin-right: 12px;

        ion-icon {
            color: red;
            font-size: 35px;
        }

    }
`

export default RoutineBox