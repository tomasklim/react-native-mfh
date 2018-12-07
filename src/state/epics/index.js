import { combineEpics } from 'redux-observable'
import { categoriesRequestEpic } from './CategoriesEpics'

const rootEpic = combineEpics(categoriesRequestEpic)

export default rootEpic
