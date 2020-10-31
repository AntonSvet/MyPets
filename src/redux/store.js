import commentReducer from "./commentReducer";
import articlesReducer from "./articlesReducer";
import navbarReducer from "./navbarReducer";


let store = {
    _state: {
        articles: {
            articlesDogs: [
                {id: 1, title: "Собаки"},
                {id: 2, title: 'Первая статья'},
                {id: 3, title: 'Вторая статья'},
                {id: 4, title: 'Третья статья'},
                {id: 5, title: 'Четвертая стотья'}
            ],
            articlesCats: [
                {id: 1, title: 'Кошки'},
                {id: 2, title: 'Первая статья'},
                {id: 3, title: 'Вторая статья'},
                {id: 4, title: 'Третья статья'},
                {id: 5, title: 'Четвертая стотья'}
            ],
        },
        navbar: {
            dogsNav: [
                {id: 1, name: 'Породы собак'},
                {id: 1, name: 'Имена'},
                {id: 1, name: 'Содержание и уход'},
                {id: 1, name: 'Питание'},
            ],
            сatsNav: [
                {id: 1, name: 'Породы кошек'},
                {id: 2, name: 'Имена'},
                {id: 3, name: 'Содержание и уход'},
                {id: 4, name: 'Питание'}
            ]
        },
        comment: {
            messageData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 5},
                {id: 2, message: 'It is my first comment?', likesCount: 12},
                {id: 3, message: 'Hello Hello Hello!!!!', likesCount: 10}
            ],
            newPostText: ''

        }
    },
    _callSubscriber() {
        console.log('state')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

  /*  _addComment() {
        let newComment = {
            id: 4,
            message: this._state.comment.newPostText,
            likesCount: 3
        }
        this._state.comment.messageData.push(newComment)
        this._state.comment.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewCommentText(newText) {
        this._state.comment.newPostText = newText
        this._callSubscriber(this._state)
    },
    */

    dispatch(action) {
        this._state.comment = commentReducer( this._state.comment, action)
        this._state.articles = articlesReducer( this._state.articles, action)
        this._state.navbar = navbarReducer( this._state.navbar, action)
        this._callSubscriber(this._state)
    }
}
export default store
