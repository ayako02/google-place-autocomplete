import { combineReducers } from 'redux';

import ResponseReducer from './response';

const appReducer = combineReducers({ ResponseReducer });

export const rootReducer = (state, action) => appReducer(state, action);
