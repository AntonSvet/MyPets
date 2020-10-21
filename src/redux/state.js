import {rerenderEntireTree} from "../render";

let state = {
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
            {id:1, message: 'Hi, how are you?', likesCount: 5},
            {id:2, message: 'It is my first comment?', likesCount: 12},
            {id:3, message: 'Hello Hello Hello!!!!', likesCount: 10}
        ],
        newPostText: ''

    }
}
window.state = state
export let addComment = () => {
    let newComment = {
        id:4,
        message: state.comment.newPostText,
        likesCount: 3
    }
    state.comment.messageData.push(newComment)
    state.comment.newPostText = ''
    rerenderEntireTree(state)
}
export let updateNewCommentText = (newText) => {
     state.comment.newPostText = newText
    rerenderEntireTree(state)
}
export default state