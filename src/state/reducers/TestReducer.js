import { ON_GET_MOVIES } from '../ActionConstants'

export const initialState = {
  items: [],
}

export const TestReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_GET_MOVIES:
      return {
        ...state,
        items: action.movies,
      }
    default:
      return state
  }
}
