import { switchMap, filter, flatMap, catchError } from 'rxjs/operators'
import { from } from 'rxjs'
import { getCategoriesLookup } from '../../utils/api'
import { ON_GET_CATEGORIES_LOOKUP_REQUEST } from '../../constants/ActionConstants'
import {
  onGetCategoriesLookupSuccess,
  onGetCategoriesLookupFail,
} from '../actions'

const categoriesLookupRequestEpic = action$ =>
  action$.pipe(
    filter(action => action.type === ON_GET_CATEGORIES_LOOKUP_REQUEST),
    switchMap(() =>
      from(getCategoriesLookup()).pipe(
        flatMap(response =>
          from([onGetCategoriesLookupSuccess(response.data)]),
        ),
        catchError(e => from([onGetCategoriesLookupFail(e)])),
      ),
    ),
  )

export default categoriesLookupRequestEpic
