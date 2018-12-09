import {
  ON_GET_CATEGORIES_LOOKUP_REQUEST,
  ON_GET_CATEGORIES_LOOKUP_SUCCESS,
  ON_GET_CATEGORIES_LOOKUP_FAIL,
  FETCH_STATUS,
} from '../../constants/ActionConstants'
import {
  extractCarouselsMetadata,
  extractCategoriesMetadata,
} from '../../utils/helpers'

const initialContentCategories = {
  status: FETCH_STATUS.NONE,
  error: '',
  data: [],
  region: '',
}

function contentCategories(
  state = initialContentCategories,
  action,
  extractMetadata = () => {},
) {
  switch (action.type) {
    case ON_GET_CATEGORIES_LOOKUP_REQUEST:
      return {
        ...state,
        status: FETCH_STATUS.LOADING,
      }
    case ON_GET_CATEGORIES_LOOKUP_SUCCESS:
      return {
        ...state,
        data: extractMetadata(action.data),
        status: FETCH_STATUS.SUCCESS,
      }
    case ON_GET_CATEGORIES_LOOKUP_FAIL:
      return {
        ...state,
        error: action.error,
        status: FETCH_STATUS.FAIL,
      }
    default:
      return state
  }
}

const initialState = {
  carousels: {},
  categories: {},
  genres: {},
  status: FETCH_STATUS.NONE,
}

const LookupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_GET_CATEGORIES_LOOKUP_REQUEST:
      return {
        ...state,
        status: FETCH_STATUS.LOADING,
        carousels: contentCategories(
          state.carousels,
          action,
          extractCarouselsMetadata,
        ),
        categories: contentCategories(
          state.categories,
          action,
          extractCategoriesMetadata,
        ),
      }
    case ON_GET_CATEGORIES_LOOKUP_SUCCESS:
      return {
        ...state,
        status: FETCH_STATUS.SUCCESS,
        carousels: contentCategories(
          state.carousels,
          action,
          extractCarouselsMetadata,
        ),
        categories: contentCategories(
          state.categories,
          action,
          extractCategoriesMetadata,
        ),
      }
    case ON_GET_CATEGORIES_LOOKUP_FAIL:
      return {
        ...state,
        status: FETCH_STATUS.FAIL,
        carousels: contentCategories(
          state.carousels,
          action,
          extractCarouselsMetadata,
        ),
        categories: contentCategories(
          state.categories,
          action,
          extractCategoriesMetadata,
        ),
      }
    default:
      return state
  }
}

export default LookupReducer
