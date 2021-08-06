import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {saveToken, removeToken} from '../../components/loginFunct';

function* Login(action) {
  try {
    console.log('login running');
    const resLogin = yield axios({
      method: 'POST',
      url: 'https://demovie.gabatch13.my.id/auth/login',
      data: action.data,
    });
    console.log('+++++++>', resLogin.data);
    yield saveToken(resLogin.data.token);
    yield put({type: 'LOGIN_SUCCESS'});
    console.log('login sukses');
  } catch (err) {
    console.log(err);
    yield put({type: 'LOGIN_FAILED', message: err});
    console.log('login gagal')
  }
}

function* logout() {
  try {
    yield removeToken();
    console.log('telah logout');
  } catch (err) {
    console.log(err);
  }
}

export default function* authSaga() {
  yield takeLatest('LOGIN', Login);
  yield takeLatest('LOGOUT', logout);
}
