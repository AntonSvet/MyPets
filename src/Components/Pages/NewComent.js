import React from "react";
import css from "./Comment.module.css";

const NewComment = (props) => {
    return(
        <div className={css.item}>
            <img src="https://i.ytimg.com/vi/gQAgQsI_V8E/hqdefault.jpg"/>
            {props.comment}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}
export default NewComment