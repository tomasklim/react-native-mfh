import { switchMap, filter, flatMap, catchError } from 'rxjs/operators'
import { from } from 'rxjs'
import { getCategories } from '../../utils/api'
import { ON_GET_CATEGORIES_REQUEST } from '../../constants/ActionConstants'
import { onGetCategoriesSuccess, onGetCategoriesFail } from '../actions'

export const categoriesRequestEpic = action$ =>
  action$.pipe(
    filter(action => action.type === ON_GET_CATEGORIES_REQUEST),
    switchMap(() =>
      from(getCategories()).pipe(
        flatMap(response => from([onGetCategoriesSuccess(response.data)])),
        catchError(e => from([onGetCategoriesFail(e)])),
      ),
    ),
  )
