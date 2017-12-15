const initialState = {
    user: ''
}

export default function login(state = initialState, action) {
    switch(action.type) {

        case 'SUBMIT_FORM':
            return Object.assign({}, state, {
                user: action.body.nickname
            })
            
        default:
            return state
    }
}