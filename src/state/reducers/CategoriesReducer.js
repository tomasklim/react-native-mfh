import {
  ON_GET_CATEGORIES_REQUEST,
  ON_GET_CATEGORIES_SUCCESS,
  ON_GET_CATEGORIES_FAIL,
} from '../../constants/ActionConstants'

export const initialState = {
  data: [],
  error: null,
  loading: false,
}

export const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case ON_GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case ON_GET_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}
