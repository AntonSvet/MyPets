import React from "react";
import s from "../Cats.module.css"
import {NavLink} from "react-router-dom";

const DogNav = (props) => {



const NavItem = (props) => {
    return <div><NavLink to={"/dogs/" + props.id}>{props.name}</NavLink></div>
}

let dogsElement = props.dogsNav.map(dog => <NavItem name={dog.name} id={dog.id}/>)


    return (
        <nav className={s.nav}>
            <div className={s.navItem}>
                {dogsElement}
            </div>
        </nav>
    )
}
export default DogNav