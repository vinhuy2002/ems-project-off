import {all} from 'redux-saga/effects';
import authSaga from '../screen/login/authSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}
