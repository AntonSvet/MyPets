import {combineReducers, createStore} from "redux";
import commentReducer from "./commentReducer";
import articlesReducer from "./articlesReducer";
import navbarReducer from "./navbarReducer";

let reducers = combineReducers({
    articles:articlesReducer,
    comment: commentReducer,
    navbar:navbarReducer

})

let store = createStore(reducers)


export default store