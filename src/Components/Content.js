import React from "react";
import {Route} from "react-router-dom";
import s from './Content.module.css'
import HomePage from "./Pages/HomePage";
import Cats from "./Pages/Cats";
import Dogs from "./Pages/Dogs";
import Birds from "./Pages/Birds";
import Fishes from "./Pages/Fishes";
import Navbar from "./Navbar";

const Content = () => {
    return (
        <main className={s.content}>
            <Route path="/home" component={HomePage}/>
            <Route path="/dogs" component={Dogs}/>
            <Route path="/cats" component={Cats}/>
            <Route path="/birds" component={Birds}/>
            <Route path="/fishes" component={Fishes}/>

        </main>
    )

}
export default Content