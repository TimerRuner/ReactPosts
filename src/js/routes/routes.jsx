import React from "react"
import About from "../pages/About"
import Login from "../pages/Login"
import Posts from "../pages/Posts"
import PostIdPage from "../pages/PostIdPage"

export const privateRoutes = [
    { path: "/about", component: <About />, exact: true },
    { path: "/posts", component: <Posts />, exact: true },
    { path: "/posts/:id", component: <PostIdPage />, exact: true },
    { path: "/*", component: <Posts />, exact: true },
]

export const publicRoutes = [
    { path: "/login", component: <Login />, exact: true },
    { path: "/*", component: <Login />, exact: true },
]
