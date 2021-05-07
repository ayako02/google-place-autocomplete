import { all } from 'redux-saga/effects';

import Test from './test';

export default function* rootSaga() {
  yield all([Test()]);
}
