import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState("")
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    function LogIn (a, b) {
        setUser(a)
        setToken(b)

        // navigate("/hoje")
    }

    return (
        <AuthContext.Provider value={{token, user, LogIn}}>
            { children }
        </AuthContext.Provider>
    )

}