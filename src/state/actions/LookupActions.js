import {
  ON_GET_CATEGORIES_LOOKUP_REQUEST,
  ON_GET_CATEGORIES_LOOKUP_SUCCESS,
  ON_GET_CATEGORIES_LOOKUP_FAIL,
} from '../../constants/ActionConstants'

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
