import Logo from "../../assets/Logo.png"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageContainer from "../../components/PageContainer";
import Checkmark from "../../assets/Checkmark.png"
import SubTitle from "./styles/SubTitle";
import RoutineBox from "./styles/RoutineBox";

const TodayPage = ({ }) => {
    return (
        <>
            <Header>
                <p>TrackIt</p>
                <img src={Logo} />
            </Header>
            <PageContainer>
                <SubTitle>
                    <h2>Segunda, 17/05</h2>
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
            <Footer>
                <div>
                    <p>Hábitos</p>
                    <div>
                        Hoje
                    </div>
                    <p>Histórico</p>
                </div>
            </Footer>
        </>
    )
}

export default TodayPage