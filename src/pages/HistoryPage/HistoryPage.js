import styled from "styled-components";
import Logo from "../../assets/Logo.png"
import PageContainer from "../../components/PageContainer";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const HistoryPage = ({ }) => {
    return (
        <>
            <Header>
                <p>TrackIt</p>
                <img src={Logo} />
            </Header>
            <PageContainer>
                <SubTitle>
                    <h2>Histórico</h2>
                </SubTitle>
                <HistoryWarning>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </HistoryWarning>
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

export default HistoryPage

const SubTitle = styled.section`
    width: 90%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 400;

    h2 {
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 4px;
    }
`

const HistoryWarning = styled.p`
    width: 90%;
    font-size: 18px;
    color: #666666;
`