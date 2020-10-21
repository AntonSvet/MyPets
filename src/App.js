import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import {addComment, updateNewCommentText} from "./redux/state";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Content
                    comments={props.state.comment}
                    articlesDogs={props.state.articles.articlesDogs}
                    articlesCats={props.state.articles.articlesCats}
                    addComment={props.addComment}
                    updateNewCommentText={props.updateNewCommentText}
                />
                <Route path="/cats" render={() => <Navbar сatsNav={props.state.navbar.сatsNav}/>}/>
                <Route path="/dogs" render={() => <Navbar dogsNav={props.state.navbar.dogsNav}/>}/>

                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
