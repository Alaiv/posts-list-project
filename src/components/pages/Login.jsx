import React from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../../context";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [auth, setAuth] = useContext(AuthContext)
    const nav = useNavigate()
    const logIn = (e) => {
        e.preventDefault()
        setAuth(true)
        nav('/posts')
        localStorage.setItem('auth', 'true')
    }

    return (
        <form onSubmit={logIn} style={{marginTop: 100}}>
            <MyInput type="text" placeholder='Введите логин'/>
            <MyInput type="password" placeholder='Введите пароль'/>
            <MyButton>Войти</MyButton>
        </form>
    );
};

export default Login;