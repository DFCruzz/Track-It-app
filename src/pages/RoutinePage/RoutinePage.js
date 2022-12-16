import Logo from "../../assets/Logo.png"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageContainer from "../../components/PageContainer";
import AddRoutines from "./styles/AddRoutines";
import AddRoutineBox from "./styles/AddRoutineBox";
import NoRoutinesWarning from "./styles/NoRoutinesWarning";
import SingleRoutine from "./styles/SingleRoutine";


const RoutinePage = ({ }) => {
    return (
        <>
            <Header>
                <p>TrackIt</p>
                <img src={Logo} />
            </Header>
            <PageContainer>
                <AddRoutines>
                    <p>Meus Hábitos</p>
                    <div>+</div>
                </AddRoutines>
                <AddRoutineBox>
                    <input type="text" placeholder="nome do hábito" />
                    <div className="days">
                        <div>D</div>
                        <div>S</div>
                        <div>T</div>
                        <div>Q</div>
                        <div>Q</div>
                        <div>S</div>
                        <div>S</div>
                    </div>
                    <div className="buttons">
                        <button className="cancel">Cancelar</button>
                        <button className="save">Salvar</button>
                    </div>
                </AddRoutineBox>
                <SingleRoutine>
                    <div className="routine-name">
                        <h3>Nome do hábito</h3>
                    </div>
                    <div className="days">
                        <div>D</div>
                        <div>S</div>
                        <div>T</div>
                        <div>Q</div>
                        <div>Q</div>
                        <div>S</div>
                        <div>S</div>
                    </div>
                </SingleRoutine>
                <SingleRoutine>
                    <div className="routine-name">
                        <h3>Nome do hábito</h3>
                    </div>
                    <div className="days">
                        <div>D</div>
                        <div>S</div>
                        <div>T</div>
                        <div>Q</div>
                        <div>Q</div>
                        <div>S</div>
                        <div>S</div>
                    </div>
                </SingleRoutine>
                <NoRoutinesWarning>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </NoRoutinesWarning>
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

export default RoutinePage