import { combineReducers } from 'redux'

import login from './login/index'
import { reducer as reduxFormReducer } from 'redux-form'

export const reducer = combineReducers({
    login,
    form: reduxFormReducer
})