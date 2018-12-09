import {
  ON_GET_CATEGORIES_REQUEST,
  ON_GET_CATEGORIES_SUCCESS,
  ON_GET_CATEGORIES_FAIL,
} from '../../constants/ActionConstants'

const onGetCategoriesRequest = id => ({
  type: ON_GET_CATEGORIES_REQUEST,
  id,
})

const onGetCategoriesSuccess = (id, data) => (
  {
    type: ON_GET_CATEGORIES_SUCCESS,
    id,
    data,
  }
)

const onGetCategoriesFail = (id, error) => ({
  type: ON_GET_CATEGORIES_FAIL,
  id,
  error,
})

export const onGetCategories = null