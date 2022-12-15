import React, { useEffect, useState } from "react";


const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogOut: () => { },
    onLogIn: () => { }
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn')
        if (storedUserLoggedInInfo === '1') {
            setLoggedIn(true)
        }
    }, [])

    function logInHandler() {
        localStorage.setItem('isLoggedIn', '1')
        setLoggedIn(true)
    }
    function logoutHandler() {
        localStorage.removeItem('isLoggedIn')
        setLoggedIn(false)
    }
    return <AuthContext.Provider value={{ isLoggedIn, onLogIn: logInHandler, onLogOut: logoutHandler }}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext