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
        slug: '',
        error: '',
        title: '',
      }
    case ON_GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        status: FETCH_STATUS.SUCCESS,
        error: '',
        data: action.data,
        title: action.name,
        slug: action.slug,
      }
    case ON_GET_CATEGORIES_FAIL:
      return {
        ...state,
        status: FETCH_STATUS.FAIL,
        data: [],
        error: action.error,
        title: '',
        slug: '',
      }
    default:
      return state
  }
}

const initialState = {
  categories: {},
}

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_GET_CATEGORIES_REQUEST:
    case ON_GET_CATEGORIES_SUCCESS:
    case ON_GET_CATEGORIES_FAIL:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.id]: contentCategories(state[action.slug], action),
        },
      }
    default:
      return state
  }
}

export default CategoriesReducer
