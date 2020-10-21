import React from "react";
import s from "../Cats.module.css"
import {NavLink} from "react-router-dom";


const CatNav = (props) => {



const NavItem = (props) => {
    return <div><NavLink to={"/cats/" + props.id}>{props.name}</NavLink></div>
}

let catsElement = props.сatsNav.map( cat =>  <NavItem name = {cat.name} id={cat.id}/>)


    return (
        <nav className={s.nav}>
            <div className={s.navItem}>
                {catsElement}
            </div>
        </nav>
    )
}
export default CatNav