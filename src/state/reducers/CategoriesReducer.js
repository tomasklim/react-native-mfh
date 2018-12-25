import {
  ON_GET_CATEGORIES_REQUEST,
  ON_GET_CATEGORIES_SUCCESS,
  ON_GET_CATEGORIES_FAIL,
  FETCH_STATUS,
} from '../../constants/ActionConstants'

const initialContentCategoriesState = {
  status: FETCH_STATUS.NONE,
  error: '',
  title: '',
  slug: '',
  data: [],
}

function contentCategories(state = initialContentCategoriesState, action) {
  switch (action.type) {
    case ON_GET_CATEGORIES_REQUEST:
      return {
        ...state,
        status: FETCH_STATUS.LOADING,
        slug: action.slug,
        error: '',
        title: action.name,
      }
    case ON_GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        status: FETCH_STATUS.SUCCESS,
        error: '',
        data: action.data,
        title: action.title,
        slug: action.slug,
      }
    case ON_GET_CATEGORIES_FAIL:
      return {
        ...state,
        status: FETCH_STATUS.FAIL,
        data: [],
        error: action.error,
        title: action.title,
        slug: action.slug,
      }
    default:
      return state
  }
}

const CategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case ON_GET_CATEGORIES_REQUEST:
    case ON_GET_CATEGORIES_SUCCESS:
    case ON_GET_CATEGORIES_FAIL:
      return {
        ...state,
        [action.slug]: contentCategories(state[action.slug], action),
      }
    default:
      return state
  }
}

export default CategoriesReducer
