import React  from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
            <Provider store={store}  >
                <App
                    /*state={state}
                     store={store}
                     dispatch={store.dispatch.bind(store)}*/
                />
            </Provider>, document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(() =>{
     rerenderEntireTree()
})


serviceWorker.unregister();
