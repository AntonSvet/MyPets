import React from "react";

import Articles from "../Articles";
import Slider2 from "../Slider/Slider2";
import Comments from "./Comments";
import CommentsContainer from "./CommentsContainer";
 const HomePage = (props) => {
    return (
        <div>
            <Slider2/>
            <Articles/>
            <CommentsContainer
                /* store={props.store}
                 comments={props.comments.messageData}
                 dispatch={props.dispatch}
                 newPostText={props.comments.newPostText}
                   */
            />
        </div>

    )
}
export default HomePage