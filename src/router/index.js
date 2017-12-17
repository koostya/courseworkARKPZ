import React, { Component } from 'react'

import Profile from '../containers/Profile'
import Login from '../containers/Login'
import Registration from '../containers/Registration'
import Main from '../containers/Main'
import NotFound from '../containers/NotFound'

import { Route, Redirect, Switch } from 'react-router-dom'

import { isUserAuthorized } from './auth/index'

class Routes extends Component {
    render() {
        return(
            <div>
                {isUserAuthorized() ?
                    <Switch>
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/main" component={Main} />
                        <Route exact path="/" render={() => (<Redirect to="/profile" />)} />
                        <Route component={NotFound} /> 
                    </Switch>
                    :
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registration" component={Registration} />
                        <Route exact path="/" render={() => (<Redirect to="/login" />)} /> 
                        <Route component={NotFound} /> 
                    </Switch>
                }
            </div>
        )
    }
}

export default Routes