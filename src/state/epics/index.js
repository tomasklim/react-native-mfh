import { combineEpics } from 'redux-observable'
import categoriesLookupRequestEpic from './LookupEpics'
import categoriesRequestEpic from './CategoriesEpics'

const rootEpic = combineEpics(categoriesLookupRequestEpic)

export default rootEpic
