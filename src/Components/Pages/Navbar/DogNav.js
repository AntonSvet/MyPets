import React from "react";
import s from "../Cats.module.css"
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return <div><NavLink to={"/dogs/" + props.id}>{props.name}</NavLink></div>
}
let dogsData = [
    {id: 1, name: 'Породы собак'},
    {id: 1, name: 'Имена'},
    {id: 1, name: 'Содержание и уход'},
    {id: 1, name: 'Питание'},
]
let dogsElement = dogsData.map(dog => <NavItem name={dog.name} id={dog.id}/>)

const DogNav = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.navItem}>
                {dogsElement}
            </div>
        </nav>
    )
}
export default DogNav