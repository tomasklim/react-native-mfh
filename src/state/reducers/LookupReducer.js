import {
  ON_GET_CATEGORIES_LOOKUP_REQUEST,
  ON_GET_CATEGORIES_LOOKUP_SUCCESS,
  ON_GET_CATEGORIES_LOOKUP_FAIL,
} from '../../constants/ActionConstants'
import {
  extractCarouselsMetadata,
  extractCategoriesMetadata,
} from '../../utils/helpers'

const initialContentCategories = {
  isFetching: false,
  timestamp: 0,
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
        isFetching: true,
        error: '',
      }
    case ON_GET_CATEGORIES_LOOKUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        data: extractMetadata(action.data),
      }
    case ON_GET_CATEGORIES_LOOKUP_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        data: [],
      }
    default:
      return state
  }
}

const initialState = {
  carousels: {},
  categories: {},
  genres: {},
}

const LookupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_GET_CATEGORIES_LOOKUP_SUCCESS:
    case ON_GET_CATEGORIES_LOOKUP_FAIL:
    case ON_GET_CATEGORIES_LOOKUP_REQUEST:
      return {
        ...state,
        loading: false,
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
