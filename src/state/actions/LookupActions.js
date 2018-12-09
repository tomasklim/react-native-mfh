import {
  ON_GET_CATEGORIES_LOOKUP_REQUEST,
  ON_GET_CATEGORIES_LOOKUP_SUCCESS,
  ON_GET_CATEGORIES_LOOKUP_FAIL,
} from '../../constants/ActionConstants'
import { axios } from '../../utils/helpers'
import { API_CATEGORY_LIST_URL } from '../../constants/BackendConstants'

export const onGetCategoriesLookupRequest = () => ({
  type: ON_GET_CATEGORIES_LOOKUP_REQUEST,
})

export const onGetCategoriesLookupSuccess = data => ({
  type: ON_GET_CATEGORIES_LOOKUP_SUCCESS,
  data,
})

export const onGetCategoriesLookupFail = error => ({
  type: ON_GET_CATEGORIES_LOOKUP_FAIL,
  error,
})

export const onGetCategoriesLookup = () => async dispatch => {
  dispatch(onGetCategoriesLookupRequest())
  axios
    .get(API_CATEGORY_LIST_URL)
    .then(response => {
      dispatch(onGetCategoriesLookupSuccess(response.data))
    })
    .catch(error => dispatch(onGetCategoriesLookupFail(error)))
}
