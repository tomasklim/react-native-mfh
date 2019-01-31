import {
  ON_GET_MOVIE_DETAIL_REQUEST,
  ON_GET_MOVIE_DETAIL_SUCCESS,
  ON_GET_MOVIE_DETAIL_FAIL,
  FETCH_STATUS,
} from '../../constants/ActionConstants'

const contentDetailInitialState = {
  status: FETCH_STATUS.NONE,
  error: '',
  detail: {},
}

function contentDetail(state = contentDetailInitialState, action) {
  switch (action.type) {
    case ON_GET_MOVIE_DETAIL_REQUEST:
      return {
        ...state,
        error: '',
        status: FETCH_STATUS.LOADING,
      }
    case ON_GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        error: '',
        detail: action.detail,
        status: FETCH_STATUS.SUCCESS,
      }
    case ON_GET_MOVIE_DETAIL_FAIL:
      return {
        ...state,
        error: action.error,
        status: FETCH_STATUS.FAIL,
      }
    default:
      return state
  }
}

const MovieReducer = (state = {}, action) => {
  switch (action.type) {
    case ON_GET_MOVIE_DETAIL_REQUEST:
    case ON_GET_MOVIE_DETAIL_SUCCESS:
    case ON_GET_MOVIE_DETAIL_FAIL:
      return {
        ...state,
        [action.slug]: contentDetail(state[action.slug], action),
      }
    default:
      return state
  }
}

export default MovieReducer
