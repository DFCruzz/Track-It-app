import Logo from "../../assets/Logo.png"
import { Link, useNavigate } from "react-router-dom";
import RegisterContainer from "./styles";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const RegisterPage = ({}) => {
    
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [photoURL, setPhotoURL] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function signUpSubmit(event) {
        event.preventDefault()

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: email,
            name: name,
            image: photoURL,
            password: password,
        })

        setIsLoading(true)
        
        request.then((e) => {
            console.log(e.data)
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
            setIsLoading(false)
        })

        request.catch(e => {

            const error = e.response.status
            if (error == 409) {
                alert("Usuário Já Cadastrado")
            }

            else {
                alert("Preencha todos os campos ou URL da imagem inválida")
            }
            setIsLoading(false)
        })

    }

    return (
        <>
            <RegisterContainer>
                <img src={Logo} />
                <h1>TrackIt</h1>
                <form onSubmit={signUpSubmit}>
                    <input data-test="email-input" type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={isLoading}/>
                    <input data-test="password-input" type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} disabled={isLoading}/>
                    <input data-test="user-name-input" type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} disabled={isLoading}/>
                    <input data-test="user-image-input" type="text" placeholder="foto" value={photoURL} onChange={e => setPhotoURL(e.target.value)} disabled={isLoading}/>
                    <button data-test="signup-btn" type="submit" disabled={isLoading}>{isLoading ? <ThreeDots color="#FFFFFF" /> : "Cadastrar"}</button>
                </form>
                <Link to="/" data-test="login-link">
                    <p>Já tem uma conta? Faça o Login!</p>
                </Link>
            </RegisterContainer>
        </>
    )
}

export default RegisterPage