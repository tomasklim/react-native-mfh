// @flow
import 'rxjs'

// react
import React from 'react'

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './src/state/reducers'
import rootEpic from './src/state/epics'

// components
import Navigator from './src/containers/navigators/Navigator'

const logger = createLogger({ collapsed: true })
const middleware = []
const epicMiddleware = createEpicMiddleware({ dependencies: {} })

middleware.push(logger)
middleware.push(epicMiddleware)

const store = createStore(rootReducer, applyMiddleware(...middleware))
epicMiddleware.run(rootEpic)

export default class App extends React.PureComponent<null> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
