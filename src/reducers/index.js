import { combineReducers } from 'redux'

import login from './login/index'
import users from './users/index'
import vote from './vote/index'
import { reducer as reduxFormReducer } from 'redux-form'

export const reducer = combineReducers({
    login,
    users,
    vote,
    form: reduxFormReducer
})