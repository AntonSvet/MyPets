import React from "react";
import {addCommentActionCreator, updateNewCommentTextActionCreator} from "../../redux/commentReducer";
import Comments from "./Comments";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.comment.newPostText,
        comments: state.comment.messageData
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewCommentText:(text) => {
            let action = updateNewCommentTextActionCreator(text)
             dispatch(action)
        },
        addComment: () => {
             dispatch(addCommentActionCreator())
        }
    }
}
const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments)
export default CommentsContainer