let initialState =  {
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
}
const navbarReducer = (state = initialState, action) => {
    return state
}
export default navbarReducer