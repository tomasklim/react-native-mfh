import { combineReducers } from 'redux'
import { CategoriesReducer } from './CategoriesReducer'

const rootReducer = combineReducers({
  categories: CategoriesReducer,
})

export default rootReducer
