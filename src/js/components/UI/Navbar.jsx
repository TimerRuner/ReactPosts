import React, { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/AuthContext/AuthContext"
import Buttom from "./Button"

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem("auth")
    }

    return (
        <div className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand">Navbar</span>

                <div className="navbar-nav links">
                    <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/about"
                    >
                        About page
                    </Link>
                    <Link className="nav-link" to="/posts">
                        Posts
                    </Link>
                </div>

                <Buttom
                    className="navbar-toggler close"
                    type="button"
                    onClick={logout}
                >
                    <span>Exit</span>
                </Buttom>
            </div>
        </div>
    )
}

export default Navbar
