// import { takeEvery, all, call, put } from 'redux-saga/effects';

// import BaseInstance from 'providers/base-instance';

// import { actions, putBrandingData } from '../actions/branding';

// import endpoint from './endpoint';

// const getBranding = async ({ token, body }) =>
//   BaseInstance.post(endpoint.branding.get, body, {
//     headers: {
//       gromadmintoken: token,
//     },
//   });

// function* getBrandingSaga({ payload }) {
//   const { token, id } = payload;
//   const body = { branding_id: id };
//   const { data } = yield call(getBranding, { token, body });
//   const { success } = data;
//   if (success) {
//     yield put(putBrandingData(data));
//   }
// }

export default function* Test() {
  // yield all([takeEvery(actions.GET.BRANDING, getBrandingSaga)]);
}
