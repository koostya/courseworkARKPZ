import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'

import { routerMiddleware, ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import Routes from './router/index'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from './reducers/index'

export const history = createHistory()

const middleware = routerMiddleware(history)

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware, thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)