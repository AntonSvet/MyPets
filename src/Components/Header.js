import React from "react";
import css from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = () => {

    return (
        <header className={css.header}>
            <div className={css.title}>
                <img src='https://pbs.twimg.com/profile_images/716831733383954432/3D5OuWvy.jpg' alt="head"/>
                <div className={css.siteName}>Наш сайт поможет вам выбрать своего первого друга</div>
                <ul>
                    <li><NavLink to="/home">Главная</NavLink></li>
                    <li><a href="#s">О нас</a></li>
                    <li><a href="#s">Контакты</a></li>
                </ul>
            </div>

        </header>

    );
}
export default Header