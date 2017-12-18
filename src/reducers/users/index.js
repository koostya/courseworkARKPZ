const initialState = {
    users: []
}

export default function users(state = initialState, action) {
    switch(action.type) {

        case 'SET_USERS':
            return Object.assign({}, state, {
                users: action.body
            })

        case 'VOTE':
            return Object.assign({}, state, {
                users: state.users.map((user) => {
                    if (user.id === action.body.id && !action.body.alreadyVoted) {
                        return Object.assign({}, user, {
                            id: user.id,
                            nickname: user.nickname,
                            name: user.name,
                            surname: user.surname,
                            rating: action.body.rating,
                            password: user.password
                        })
                    }
                    return user
                })
            })
            
        default:
            return state
    }
}