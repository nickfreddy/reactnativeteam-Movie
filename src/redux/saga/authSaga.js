import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  saveToken,
  removeToken,
  saveUserId,
  removeUserId,
} from '../../components/loginFunct';



function* Login(action) {
  try {
    console.log('login running');
    const resLogin = yield axios({
      method: 'POST',
      url: 'https://demovie.gabatch13.my.id/auth/login',
      data: action.data,
    });
    yield saveToken(resLogin.data.token);
    yield saveUserId(resLogin.data._id);
    yield put({type: 'LOGIN_SUCCESS'});
  } catch (err) {
    console.log(err);
    yield put({type: 'LOGIN_FAILED', message: err});
  }
}

function* logout() {
  try {
    yield removeToken();
    yield removeUserId();
    yield put({type:'LOG_OUT_SUCCESS'})
  } catch (err) {
    console.log(err);
    yield put({type:'LOG_OUT_FAILED'})
  }
}

function* register(action) {
  try {
    const resLogin = yield axios({
      method: 'POST',
      url: 'https://demovie.gabatch13.my.id/auth/register',
      data: action.dataReg,
    });
    yield saveToken(resLogin.data.token);
    yield saveUserId(resLogin.data._id);
    yield put({type: 'REGISTER_SUCCESS'});
  } catch (err) {
    console.log('ini error', err.errors);
    yield put({type: 'REGISTER_FAILED', message: err});
  }
}

export default function* authSaga() {
  yield takeLatest('LOGIN', Login);
  yield takeLatest('LOGOUT', logout);
  yield takeLatest('REGISTER', register);
}
