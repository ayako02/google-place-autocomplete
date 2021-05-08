import { takeEvery, all, call } from 'redux-saga/effects';

import BaseInstance from 'providers/base-instance';

import { actions } from '../actions/response';

// Note: A sample saga to display on calling API

const getResponses = async ({ body = {} }) => BaseInstance.get('endpoint', body, {});

function* getResponseSaga() {
  try {
    const response = yield call(getResponses, {});
    console.log({ response });
  } catch (err) {
    throw new Error(err);
  }
}

export default function* Response() {
  yield all([takeEvery(actions.GET.RESPONSES, getResponseSaga)]);
}
