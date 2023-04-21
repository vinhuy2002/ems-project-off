import {PayloadAction} from '@reduxjs/toolkit';
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {call, fork, put, takeLatest} from 'redux-saga/effects';
import { authApi } from '../../api/authApi';
import { Account, LoginResponse, UserInfo } from '../../models/common';
import {authActions} from './authSlice';

function* handleLogin(action: PayloadAction<Account>) {
  try {
    const res: LoginResponse = yield call(authApi.login, action.payload);
    yield AsyncStorage.setItem('access_token', res.token);
    yield AsyncStorage.setItem('refresh_token', res.refresh_token);
    yield put(authActions.fetchUserInfo());
    yield put(authActions.loginSuccess());
    console.log(res.token);
  } catch (error) {
    yield put(authActions.loginFailed('Wrong Username or password'));
    console.log('failed')
  }

}

async function clearData() {
  await AsyncStorage.clear();
}

function* handleLogout() {
  yield clearData();
}
function* fetchUserInfo() {
  try {
    const res: UserInfo = yield call(authApi.getAccountInfo);
    yield put(authActions.fetchUserInfoSuccess(res));
  } catch (error) {
    yield put(authActions.loginFailed('Wrong Username or password'));
  }
}
function* watchLoginFlow() {
  yield takeLatest(authActions.login.type, handleLogin);
  yield takeLatest(authActions.logout.type, handleLogout);
  yield takeLatest(authActions.fetchUserInfo.type, fetchUserInfo);
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
