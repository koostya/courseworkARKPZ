const initialState = {
    requests: [],
    active: []
}

export default function request(state = initialState, action) {
    switch(action.type) {

        case 'SET_REQUEST_DATA':
            return Object.assign({}, state, {
                requests: action.body
            })

        case 'SET_ACTIVE_DATA':
            return Object.assign({}, state, {
                active: action.body
            })

        case 'ACCEPT_REQUEST':
            return Object.assign({}, state, {
                requests: action.body.requests.filter((req) => {
                    if (req.creditor === action.body.id && req.user === action.body.user) {
                        return Object.assign({}, req, {
                            creditor: action.body.id,
                            user: action.body.user,
                            active: true
                        })
                    } else {
                        return req
                    }
                })
            })
            
        default:
            return state
    }
}