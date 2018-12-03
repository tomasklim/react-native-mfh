import { ON_GET_MOVIES } from '../../constants/ActionConstants'

export const initialState = {
  items: [],
}

export const CategoriesReducer = (state = initialState, action) => {
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
