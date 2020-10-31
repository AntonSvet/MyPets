const ADD_COMMENT = "ADD-COMMENT"
const UPDATE_NEW_COMMENT_TEXT = "UPDATE-NEW-COMMENT-TEXT"

let initialState =  {
    messageData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It is my first comment?', likesCount: 12},
        {id: 3, message: 'Hello Hello Hello!!!!', likesCount: 10}
    ],
        newPostText: ''

}
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            let newComment = {
                id: 4,
                message: state.newPostText,
                likesCount: 3
            }
            state.messageData.push(newComment)
            state.newPostText = ''
            return state
        case UPDATE_NEW_COMMENT_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export  const addCommentActionCreator = () =>( {type: ADD_COMMENT})
export const updateNewCommentTextActionCreator = (text) => ({type: UPDATE_NEW_COMMENT_TEXT, newText:text})
export default commentReducer