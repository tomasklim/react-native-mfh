import {
  ON_GET_CATEGORIES_REQUEST,
  ON_GET_CATEGORIES_SUCCESS,
  ON_GET_CATEGORIES_FAIL,
} from '../../constants/ActionConstants'

export const onGetCategoriesRequest = () => ({
  type: ON_GET_CATEGORIES_REQUEST,
})

export const onGetCategoriesSuccess = data => ({
  type: ON_GET_CATEGORIES_SUCCESS,
  data,
})

export const onGetCategoriesFail = error => ({
  type: ON_GET_CATEGORIES_FAIL,
  error,
})
