import React, { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import AuthContext from "../context/AuthContext/AuthContext"
import { publicRoutes, privateRoutes } from "../routes/routes"
import Loader from "./UI/Loader"

const AppRouter = () => {
    const { isAuth, setIsAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => {
                return (
                    <Route
                        element={route.component}
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                    />
                )
            })}
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => {
                return (
                    <Route
                        element={route.component}
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                    />
                )
            })}
        </Routes>
    )
}

export default AppRouter
