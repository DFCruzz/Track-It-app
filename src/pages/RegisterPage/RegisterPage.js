
import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom";
import RegisterContainer from "./styles";

const RegisterPage = ({}) => {
    return (
        <>
            <RegisterContainer>
                <img src={Logo} />
                <h1>TrackIt</h1>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="senha" />
                    <input type="text" placeholder="nome" />
                    <input type="text" placeholder="foto" />
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/">
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </RegisterContainer>
        </>
    )
}

export default RegisterPage