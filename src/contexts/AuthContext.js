import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(undefined)
    const [user, setUser] = useState(undefined)
    const navigate = useNavigate()

    function LogIn (a, b) {
        setUser(a)
        setToken(b)
        console.log(a)
        console.log(b)
        navigate("/hoje")
    }

    return (
        <AuthContext.Provider value={{token, user, LogIn}}>
            { children }
        </AuthContext.Provider>
    )

}