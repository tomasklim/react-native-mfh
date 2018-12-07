import { combineReducers } from 'redux'
import LookupReducer from './LookupReducer'
import CategoriesReducer from './CategoriesReducer'

const rootReducer = combineReducers({
  lookup: LookupReducer,
  categories: CategoriesReducer,
})

export default rootReducer
