import { takeEvery, all, call } from 'redux-saga/effects';

import BaseInstance from 'providers/base-instance';

import { actions } from '../actions/response';

// Note: A sample saga to display API calling

const getResponses = async ({ body = {} }) => BaseInstance.get('endpoint', body, {});

function* getResponseSaga() {
  try {
    const response = yield call(getResponses, {});
    console.log({ response });
    // Note: If response is success, use yield put() to put response into reducer
  } catch (err) {
    throw new Error(err);
  }
}

export default function* Response() {
  yield all([takeEvery(actions.GET.RESPONSES, getResponseSaga)]);
}
