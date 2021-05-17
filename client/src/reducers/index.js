import { combineReducers } from 'redux'

import posts from '../store/postsReducer'

export const reducers = combineReducers({ posts })