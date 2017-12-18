const initialState = {
    creditModal: false,
    creditorID: ''
}

export default function modal(state = initialState, action) {
    switch(action.type) {

        case 'CREDIT_MODAL_SHOW':
            return Object.assign({}, state, {
                creditModal: true,
                creditorID: action.creditorID
            })

        case 'CREDIT_MODAL_HIDE':
            return Object.assign({}, state, {
                creditModal: false
            })
            
        default:
            return state
    }
}