import React, { Component } from 'react'

import Profile from '../containers/Profile'
import Login from '../containers/Login'
import Registration from '../containers/Registration'

import { Route, Redirect, Switch } from 'react-router-dom'

import { isUserAuthorized } from './auth/index'

class Routes extends Component {
    render() {
        return(
            <Route path="/" render={() => 
                <div>
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/profile" component={Profile} />

                    {isUserAuthorized() ?
                        <Redirect to="/profile" />
                        :
                        <Redirect to="/login" />
                    }
                </div>
            }>
                {this.props.children}
            </Route>
        )
    }
}

export default Routes