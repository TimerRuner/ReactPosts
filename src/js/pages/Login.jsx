import React, { useContext } from "react"
import Input from "../components/UI/Input"
import Button from "../components/UI/Button"
import AuthContext from "../context/AuthContext/AuthContext"

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const submit = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem("auth", "true")
    }
    return (
        <div className="login-page">
            <form onSubmit={submit}>
                <h1>Login Page</h1>
                <Input
                    className="form-control"
                    type="text"
                    placeholder="e-mail"
                />
                <Input
                    className="form-control"
                    type="password"
                    placeholder="password"
                />
                <Button type="submit" className="btn btn-success">
                    Login
                </Button>
            </form>
        </div>
    )
}

export default Login
