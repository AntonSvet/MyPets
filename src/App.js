import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import {addComment, updateNewCommentText} from "./redux/store";
import Aside from "./Components/Aside";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Aside/>
                <Content
                    /*
                  articlesDogs={props.store.articles.articlesDogs}
                  articlesCats={props.store.articles.articlesCats}


                 store={props.store}

                  comments={props.state.comment}
                  dispatch={props.dispatch}*/

                />
                <Route path="/cats" render={() => <Navbar сatsNav={props.state.navbar.сatsNav}/>}/>
                <Route path="/dogs" render={() => <Navbar dogsNav={props.state.navbar.dogsNav}/>}/>

                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
