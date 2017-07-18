import { takeLatest, call, put } from 'redux-saga/effects';

import { LOCATIONS_REQUEST, LOCATIONS_SUCCESS, LOCATIONS_FAILURE } from '../constants/location';

import fetchLocationsApi from '../api/location';

function* usersFlow() {
  try {
    const response = yield call(fetchLocationsApi);
    yield put({
      type: LOCATIONS_SUCCESS,
      response
    });
  } catch (e) {
    yield put({
      type: LOCATIONS_FAILURE,
      e
    });
  }
}


function* usersWatcher() {
  yield takeLatest(LOCATIONS_REQUEST, usersFlow);
}

export default usersWatcher;
