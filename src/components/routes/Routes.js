import Welcome from "../pages/Welcome";
import Posts from "../pages/Posts";
import PostsPage from "../PostsPage";
import Login from "../pages/Login";
import {Navigate} from "react-router-dom";
import React from "react";

export const privateRoutes = [
    {path: '/welcome', element: <Welcome/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostsPage/>},
    {path: '/', element: <Navigate to='/posts'/>},
    {path: '/*', element: <h1 style={{color: 'red', marginTop: 100}}>Страница не найдена</h1>}
]

export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/', element: <Navigate to='/login'/>},
    {path: '/*', element: <Navigate to='/login' />}
]