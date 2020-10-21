import React from "react";

import Articles from "../Articles";
import Slider2 from "../Slider/Slider2";
import Comments from "./Comments";
 const HomePage = (props) => {
    return (
        <div>
            <Slider2/>
            <Articles/>
            <Comments comments={props.comments.messageData}
                      addComment={props.addComment}
                      newPostText={props.comments.newPostText}
                      updateNewCommentText={props.updateNewCommentText}
            />
        </div>

    )
}
export default HomePage