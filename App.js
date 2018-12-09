// @flow
import 'rxjs'

// react
import React from 'react'

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import rootReducer from './src/state/reducers'

// components
import Navigator from './src/containers/navigators/Navigator'

const logger = createLogger({ collapsed: true })
const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, reduxPromise, logger),
)

export default class App extends React.PureComponent<null> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
