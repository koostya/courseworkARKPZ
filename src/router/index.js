import React, { Component } from 'react'

import Profile from '../containers/Profile'
import Login from '../containers/Login'
import Registration from '../containers/Registration'
import Main from '../containers/Main'

import { Route, Redirect, Switch } from 'react-router-dom'

import { isUserAuthorized } from './auth/index'

class Routes extends Component {
    render() {
        return(
            <div>
                {isUserAuthorized() ?
                    <Switch>
                        <Route path="/profile" component={Profile} />
                        <Route path="/main" component={Main} />
                    </Switch>
                    :
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/registration" component={Registration} />
                    </Switch>
                }
            </div>
        )
    }
}

export default Routes