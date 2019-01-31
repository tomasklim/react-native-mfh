import { combineReducers } from 'redux'
import LookupReducer from './LookupReducer'
import CategoriesReducer from './CategoriesReducer'
import MovieReducer from './MovieReducer'

const rootReducer = combineReducers({
  movie: MovieReducer,
  lookup: LookupReducer,
  categories: CategoriesReducer,
})

export default rootReducer
