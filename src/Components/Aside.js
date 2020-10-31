import {NavLink} from "react-router-dom";
import React from "react";
import css from "./Aside.module.css"

const Aside = () => {
    return (
        <div className={css.aside}>
            <div className={css.animals}>
                <div><NavLink to="/dogs">Собаки</NavLink></div>
                <div><NavLink to="/cats">Кошки</NavLink></div>
                <div><NavLink to="/birds">Птицы</NavLink></div>
                <div><NavLink to="/fishes">Рыбки</NavLink></div>
            </div>
        </div>
    )
}
export default Aside