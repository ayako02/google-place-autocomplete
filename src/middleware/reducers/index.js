import { combineReducers } from 'redux';

import TestReducer from './test';

const appReducer = combineReducers({
  TestReducer,
});

export const rootReducer = (state, action) => appReducer(state, action);
