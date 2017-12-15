const initialState = {
    alreadyVoted: false
}

export default function users(state = initialState, action) {
    switch(action.type) {

        case 'SET_USERS':
            return Object.assign({}, state, {
                users: action.body.alreadyVoted
            })
            
        default:
            return state
    }
}