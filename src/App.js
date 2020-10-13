import React from 'react';
import './App.css';


import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Content/>
                <Route path="/cats" component={Navbar}/>
                <Route path="/dogs" component={Navbar}/>

                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
