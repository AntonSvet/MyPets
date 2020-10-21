import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addComment, updateNewCommentText} from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addComment={addComment} updateNewCommentText={updateNewCommentText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}





