import Logo from "../../assets/Logo.png"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageContainer from "../../components/PageContainer";
import Checkmark from "../../assets/Checkmark.png"
import SubTitle from "./styles/SubTitle";
import RoutineBox from "./styles/RoutineBox";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const TodayPage = ({ }) => {

    const { token, user } = useContext(AuthContext)
    const [month, setMonth] = useState(undefined)
    const [day, setDay] = useState(undefined)
    const [weekday, setWeekday] = useState(undefined)


    const date = dayjs(new Date())

    useEffect(() => {

        if(date.day() == 0) {
            setWeekday("Domingo")
        }
        else if(date.day() == 1) {
            setWeekday("Segunda")
        }
        else if(date.day() == 2) {
            setWeekday("Terça")
        } 
        else if(date.day() == 3) {
            setWeekday("Quarta")
        } 
        else if(date.day() == 4) {
            setWeekday("Quinta")
        } 
        else if(date.day() == 5) {
            setWeekday("Sexta")
        } 
        else if(date.day() == 6) {
            setWeekday("Sábado")
        }
        
        setDay(date.date())
        setMonth(date.month())
    }, [date])


    return (
        <>
            <Header />
            <PageContainer>
                <SubTitle>
                    <h2 data-test="today">{weekday}, {day}/{month}</h2>
                    <h3>Nenhum hábito concluído ainda</h3>
                </SubTitle>
                <RoutineBox>
                    <div className="content">
                        <h2>nome do hábito</h2>
                        <p>Sequência atual: <span>4 dias</span></p>
                        <p>Seu recorde: 5 dias</p>
                    </div>
                    <div className="checkbox">
                        <img src={Checkmark} />
                    </div>
                </RoutineBox>
                <RoutineBox>
                    <div className="content">
                        <h2>nome do hábito</h2>
                        <p>Sequência atual: <span>4 dias</span></p>
                        <p>Seu recorde: 5 dias</p>
                    </div>
                    <div className="checkbox">
                        <img src={Checkmark} />
                    </div>
                </RoutineBox>
                <RoutineBox>
                    <div className="content">
                        <h2>nome do hábito</h2>
                        <p>Sequência atual: <span>4 dias</span></p>
                        <p>Seu recorde: 5 dias</p>
                    </div>
                    <div className="checkbox">
                        <img src={Checkmark} />
                    </div>
                </RoutineBox>

            </PageContainer>
            <Footer />
        </>
    )
}

export default TodayPage