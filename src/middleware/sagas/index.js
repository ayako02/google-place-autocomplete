import { all } from 'redux-saga/effects';

import Response from './response';

export default function* rootSaga() {
  yield all([Response()]);
}
