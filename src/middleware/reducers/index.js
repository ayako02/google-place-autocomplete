import { combineReducers } from 'redux';

import TestReducer from './response';

const appReducer = combineReducers({
  TestReducer,
});

export const rootReducer = (state, action) => appReducer(state, action);
