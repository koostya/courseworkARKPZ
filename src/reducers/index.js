import { combineReducers } from 'redux'

import login from './login/index'
import users from './users/index'
import vote from './vote/index'
import user from './user/index'
import modal from './modal/index'
import request from './requests/index'
import { reducer as reduxFormReducer } from 'redux-form'

export const reducer = combineReducers({
    login,
    users,
    vote,
    user,
    modal,
    request,
    form: reduxFormReducer
})
