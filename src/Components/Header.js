import React from "react";
import "./Header.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="title">
                <img src='https://pbs.twimg.com/profile_images/716831733383954432/3D5OuWvy.jpg'/>
                <div className="name_site">Наш сайт поможет вам выбрать своего первого друга</div>
                <ul>
                    <li><NavLink to="/home">Главная</NavLink></li>
                    <li><a href="#s">О нас</a></li>
                    <li><a href="#s">Контакты</a></li>
                </ul>
            </div>
            <div className="animals">
                <div><NavLink to="/dogs">Собаки</NavLink></div>
                <div><NavLink to="/cats">Кошки</NavLink></div>
                <div><NavLink to="/birds">Птицы</NavLink></div>
                <div><NavLink to="/fishes">Рыбки</NavLink></div>
            </div>
        </header>

    );
}
export default Header