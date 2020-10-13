import React from "react";
import s from "./Navbar.module.css"
import CatNav from "./Pages/Navbar/CatNav";
import {Route} from "react-router-dom";
import DogNav from "./Pages/Navbar/DogNav";
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <Route path="/cats" component={CatNav}/>
            <Route path="/dogs" component={DogNav}/>
        </nav>
    )
}
export default Navbar