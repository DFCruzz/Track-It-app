import styled from "styled-components";

const AddRoutineBox = styled.form`
    width: 90%;
    height: 180px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);

    &.hidden {
        display: none;
    }


    input {
        width: 85%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        border: 2px solid #D5D5D5;
        border-radius: 6px;
        padding: 0 12px;

        &::placeholder {
            color: #DBDBDB;
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
            border: 2px solid #DBDBDB;
            border-radius: 5px;
            margin-right: 4px;
            margin-top: 12px;
            color: #D4D4D4;

            &.selected {
                background-color: #CFCFCF;
                color: #FFFFFF;
            }
        }
    }

    div.buttons {
        width: 90%;
        display: flex;
        justify-content: right;
        align-items: center;
        margin-top: 18px;

        button {
            width: 84px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-weight: 400;
            border-radius: 5px;
            margin-left: 18px;

            &.save {
                background-color: #52B6FF;
                color: #FFFFFF;
            }

            &.cancel {
                background-color: #FFFFFF;
                color: #52B6FF;
            }
        }
    }
`

export default AddRoutineBox