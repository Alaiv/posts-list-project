import React, {useContext} from 'react';
import cl from './Header.module.css'
import {NavLink} from "react-router-dom";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../../context";

const Header = () => {
    const [isAuth, setIsAuth] = useContext(AuthContext)

    const storeAuth = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    const active = ({isActive}) => isActive ? [cl.activeLink, cl.item].join(' ') : cl.item;
    return (
        <div className={cl.header}>
            <NavLink className={active} to={'/welcome'}>Welcome page</NavLink>
            <NavLink className={active} to={'/posts'}>Posts</NavLink>
            <MyButton onClick={storeAuth} style={{float: 'right', marginRight: 250}}>
                {isAuth ? 'Выйти' : 'Войти'}
            </MyButton>
        </div>
    );
};

export default Header;