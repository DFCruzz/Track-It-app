import LoginContainer from "./styles"
import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"

const LoginPage = ({ }) => {
    return (
        <>
            <LoginContainer>
                <img src={Logo} />
                <h1>TrackIt</h1>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="senha" />
                    <button type="submit">Entrar</button>
                </form>
                <Link to="/cadastro">
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </LoginContainer>
        </>
    )
}

export default LoginPage
