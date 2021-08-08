import {put, takeLatest} from 'redux-saga/effects';
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
    // console.log('+++++++>', resLogin.data);
    yield saveToken(resLogin.data.token);
    yield saveUserId(resLogin.data._id);
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
    yield removeUserId();
    yield put({type:'LOG_OUT_SUCCESS'})
    console.log('telah logout');
  } catch (err) {
    console.log(err);
    yield put({type:'LOG_OUT_FAILED'})
    console.log('logout fail')
  }
}

function* register(action) {
  try {
    console.log('register running');
    const resLogin = yield axios({
      method: 'POST',
      url: 'https://demovie.gabatch13.my.id/auth/register',
      data: action.dataReg,
    });
    yield saveToken(resLogin.data.token);
    yield saveUserId(resLogin.data._id);
    yield put({type: 'REGISTER_SUCCESS'});
    console.log('register sukses');
  } catch (err) {
    console.log('ini error', err.errors);
    yield put({type: 'REGISTER_FAILED', message: err});
    console.log('register gagal')
  }
}

export default function* authSaga() {
  yield takeLatest('LOGIN', Login);
  yield takeLatest('LOGOUT', logout);
  yield takeLatest('REGISTER', register);
}
