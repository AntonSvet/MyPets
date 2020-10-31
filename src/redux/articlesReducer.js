let initialState =  {
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
}
const articlesReducer = (state = initialState, action) => {
    return state
}
export default articlesReducer