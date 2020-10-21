import React from "react";
import {Route} from "react-router-dom";
import s from './Content.module.css'
import HomePage from "./Pages/HomePage";
import Cats from "./Pages/Cats";
import Dogs from "./Pages/Dogs";
import Birds from "./Pages/Birds";
import Fishes from "./Pages/Fishes";


const Content = (props) => {

    return (
        <main className={s.content}>
            <Route path="/home" render={() =><HomePage comments={props.comments}
                                                       addComment={props.addComment}
                                                       updateNewCommentText={props.updateNewCommentText}
            />}/>
            <Route path="/dogs" render={() => <Dogs articlesDogs={props.articlesDogs} />}/>
            <Route path="/cats" render={() => <Cats articlesCats={props.articlesCats} />}/>
            <Route path="/birds" render={() => <Birds/>} />
            <Route path="/fishes" render={() => <Fishes/>} />

        </main>
    )

}
export default Content