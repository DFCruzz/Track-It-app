import LoginContainer from "./styles"
import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"
import { AuthContext } from "../../contexts/AuthContext"


const LoginPage = ({}) => {

    const { user, token, LogIn  } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function LogInSubmit(e) {
        e.preventDefault()
        const body = {
            email: email,
            password: password
        }

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)

        setIsLoading(true)

        request.then((e) => {
            setIsLoading(false)
            console.log(e.data)
            console.log(e.data.token)
            LogIn(e.data, e.data.token)            
        })

        request.catch((e) => {
            const error = e.response.status
            if (error == 401) {
                alert("Usuário Não Cadastrado e/ou Senha Inválida")
            }

            else {
                alert("Preencha todos os campos")
            }
            setIsLoading(false)
        })
    }

    return (
        <LoginContainer>
            <img src={Logo} />
            <h1>TrackIt</h1>
            <form onSubmit={LogInSubmit}>
                <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={isLoading} />
                <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} disabled={isLoading} />
                <button type="submit" disabled={isLoading}>{isLoading ? <ThreeDots color="#FFFFFF" /> : "Entrar"}</button>
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginContainer>

    )
}

export default LoginPage
