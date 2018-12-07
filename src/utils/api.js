import { API_CATEGORY_LIST_URL } from '../constants/BackendConstants'
import { axios } from './helpers'

export const getCategories = () => axios.get(API_CATEGORY_LIST_URL)
