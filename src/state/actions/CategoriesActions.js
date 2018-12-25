import {
  ON_GET_CATEGORIES_REQUEST,
  ON_GET_CATEGORIES_SUCCESS,
  ON_GET_CATEGORIES_FAIL,
} from '../../constants/ActionConstants'
import { axios } from '../../utils/helpers'
import {
  API_SEARCH_URL,
  PLATFORM_ID,
  WEB_LANG,
} from '../../constants/BackendConstants'

const onGetCategoriesRequest = (slug, title) => ({
  type: ON_GET_CATEGORIES_REQUEST,
  slug,
  title,
})

const onGetCategoriesSuccess = (slug, title, data) => ({
  type: ON_GET_CATEGORIES_SUCCESS,
  slug,
  title,
  data,
})

export const onGetCategoriesFail = (slug, title, error) => ({
  type: ON_GET_CATEGORIES_FAIL,
  slug,
  title,
  error,
})

export const onGetCategories = (id, slug, title) => async dispatch => {
  dispatch(onGetCategoriesRequest(slug))
  axios
    .get(API_SEARCH_URL, {
      params: {
        platform: PLATFORM_ID,
        lang: WEB_LANG,
        categories: id,
      },
    })
    .then(response => {
      dispatch(onGetCategoriesSuccess(slug, title, response.data))
    })
    .catch(error => dispatch(onGetCategoriesFail(slug, title, error)))
}
