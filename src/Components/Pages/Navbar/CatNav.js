import React from "react";
import s from "../Cats.module.css"
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return <div><NavLink to={"/cats/" + props.id}>{props.name}</NavLink></div>
}

let сatsData = [
    {id:1, name: 'Породы кошек'},
    {id:2, name: 'Имена'},
    {id:3, name: 'Содержание и уход'},
    {id:4, name: 'Питание'}
]
let catsElement = сatsData.map( cat =>  <NavItem name = {cat.name} id={cat.id}/>)

const CatNav = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.navItem}>
                {catsElement}
            </div>
        </nav>
    )
}
export default CatNav