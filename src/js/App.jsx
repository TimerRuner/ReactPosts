import React, { useState, useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRoutes"
import AuthContext from "./context/AuthContext/AuthContext"
import Navbar from "./components/UI/Navbar"
const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, [])

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
                isLoading,
            }}
        >
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
