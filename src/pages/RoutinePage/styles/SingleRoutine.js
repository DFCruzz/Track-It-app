import styled from "styled-components";

const SingleRoutine = styled.section`
    width: 90%;
    height: 90px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
    margin-top: 32px;

    div.routine-name {
        display: flex;
        width: 90%;
        align-items: center;
        justify-content: space-between;

        h3 {
            color: #666666;
            font-size: 20px;
            font-weight: 400;
        }
    }

    div.days {
        display: flex;
        width: 90%;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            background: #FFFFFF;
            border: 1px solid #CFCFCF;
            border-radius: 5px;
            margin-right: 4px;
            margin-top: 12px;
            color: #DBDBDB;

            &.selected {
                background-color: #CFCFCF;
                color: #FFFFFF;
            }
        }
    }
`

export default SingleRoutine