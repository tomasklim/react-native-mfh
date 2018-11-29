import { combineReducers } from 'redux'
import { TestReducer } from './TestReducer'

const rootReducer = combineReducers({
  test: TestReducer,
})

export default rootReducer
