// @flow

// react
import React from 'react'
import { Font } from 'expo'

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import rootReducer from './src/state/reducers'

// components
import Navigator from './src/containers/navigators/Navigator'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger({ collapsed: true })
const store = createStore(
  persistedReducer,
  applyMiddleware(reduxThunk, reduxPromise, logger),
)
const persistor = persistStore(store)

type State = {
  fontLoaded: boolean,
}

type Props = {}

export default class App extends React.PureComponent<Props, State> {
  state = { fontLoaded: false }

  async componentDidMount() {
    await Font.loadAsync({
      'Gotham-Medium': require('./assets/fonts/gotham-medium.ttf'),
    })
    await Font.loadAsync({
      'Gotham-Book': require('./assets/fonts/gotham-book.ttf'),
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    const { fontLoaded } = this.state

    return fontLoaded ? (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    ) : null
  }
}
