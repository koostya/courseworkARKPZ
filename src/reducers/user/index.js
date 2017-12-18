const initialState = {
    user: '',
    name: '',
    surname: '',
    rating: '',
    description: '',
    money: '',
    editingMoney: false
}

export default function user(state = initialState, action) {
    switch(action.type) {

        case 'SET_USER_DATA':
            return Object.assign({}, state, {
                user: action.body.nickname,
                name: action.body.name,
                surname: action.body.surname,
                rating: action.body.rating,
                description: action.body.description,
                money: action.body.money
            })

        case 'LOGOUT':
            return Object.assign({}, state, {
                user: '',
                name: '',
                surname: '',
                rating: '',
                description: '',
                money: ''
            })

        case 'EDITING_MONEY':
            return Object.assign({}, state, {
                editingMoney: !state.editingMoney
            })

        case 'EDITING_MONEY_CONFIRM':
            return Object.assign({}, state, {
                money: action.body.money,
                editingMoney: !state.editingMoney
            })
            
        default:
            return state
    }
}