import React from "react";
import s from "./Navbar.module.css"
import CatNav from "./Pages/Navbar/CatNav";
import {Route} from "react-router-dom";
import DogNav from "./Pages/Navbar/DogNav";
import Comments from "./Pages/Comments";
const Navbar = (props) => {
    return (
        <nav className={s.nav}>

            <Route path="/cats" render= { () =><CatNav сatsNav={props.сatsNav}/>}/>
            <Route path="/dogs" render={() =><DogNav dogsNav={props.dogsNav} /> }/>

        </nav>
    )
}
export default Navbar