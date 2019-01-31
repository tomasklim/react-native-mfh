import {
  ON_GET_MOVIE_DETAIL_REQUEST,
  ON_GET_MOVIE_DETAIL_SUCCESS,
  ON_GET_MOVIE_DETAIL_FAIL,
} from '../../constants/ActionConstants'
import { axios } from '../../utils/helpers'
import {
  API_MOVIE_RESOURCE_URL,
  PLATFORM_ID,
  WEB_LANG,
} from '../../constants/BackendConstants'

const onGetMovieDetailRequest = slug => ({
  type: ON_GET_MOVIE_DETAIL_REQUEST,
  slug,
})

const onGetMovieDetailSuccess = slug => ({
  type: ON_GET_MOVIE_DETAIL_SUCCESS,
  slug,
})

export const onGetMovieDetailFail = slug => ({
  type: ON_GET_MOVIE_DETAIL_FAIL,
  slug,
})

export const onGetMovieDetail = slug => async dispatch => {
  dispatch(onGetMovieDetailRequest(slug))
  axios
    .get(`${API_MOVIE_RESOURCE_URL}/${slug}?lang=${WEB_LANG}`, {
      params: {
        platform: PLATFORM_ID,
        lang: WEB_LANG,
      },
    })
    .then(response => {
      dispatch(onGetMovieDetailSuccess(slug, response.data))
    })
    .catch(error => dispatch(onGetMovieDetailFail(slug, error)))
}
