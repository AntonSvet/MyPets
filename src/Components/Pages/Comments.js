import React from "react";
import css from './Comment.module.css'
import NewComment from "./NewComent";


const Comments = (props) => {
    let messageElement = props.comments.map(m => <NewComment comment={m.message} likesCount={m.likesCount}/>)

    let newCommentElement = React.createRef()
    let addComment = () => {
        props.addComment()
    }

    let onPostChance = () => {
        let text = newCommentElement.current.value
         props.updateNewCommentText(text)

    }
    return (
        <div className={css.comments}>
            <h3>Комментарии</h3>
            <div><textarea onChange={onPostChance} ref={newCommentElement} value={props.newPostText} cols="50" rows="3" placeholder="Введите сообщение"/></div>
            <div>
                <button onClick={addComment}>Отправить</button>
            </div>

            <div className={css.item}>
                {messageElement}

            </div>
        </div>
    )
}
export default Comments