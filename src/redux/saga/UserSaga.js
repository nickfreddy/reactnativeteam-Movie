import {put, select} from '@redux-saga/core/effects';
import axios from 'axios';
import {takeLatest} from 'redux-saga/effects';
import {getUserId, getHeaders} from '../../components/loginFunct';

function* dataUsers(action) {
  try {
    console.log('mulai get user');
    const resUserId = yield getUserId();
    const resdataUsers =
      yield axios.get(`https://demovie.gabatch13.my.id/users/${resUserId}
    `);
    //console.log('++++>', resUserId);
    // console.log('===>', resdataUsers.data);
    yield put({type: 'GET_USER_SUCCESS', data: resdataUsers.data});
    console.log('selesai');
  } catch (err) {
    console.log(err);
  }
}

function* dataUsersDetails(action) {
  const User_Id = yield select(state => state.user.UserId);
  try {
    const resUserId = yield getUserId();
    const resDetailUser = yield axios.get(
      `https://demovie.gabatch13.my.id/users/${resUserId}/reviews`,
    );
    yield put({
      type: 'GET_USER_DETAILS_SUCCESS',
      dataUsersDetails: resDetailUser,
    });
  } catch (err) {
    console.log(err);
  }
}

function* updateDataUser(action) {
  try {
    const resUserId = yield getUserId();
    const headers = yield getHeaders();
    const resUpDetailUser = yield axios({
      method: 'PUT',
      url: `https://demovie.gabatch13.my.id/users/${resUserId}`,
      headers,
      data: action.dataPost,
    });
    console.log('update sukses', resUpDetailUser.data);
    yield put({
      type: 'UPDATE_USER',
      dataUpdateUser: resUpDetailUser.data,
    });
  } catch (err) {
    console.log(err);
  }
}

function* UserSaga() {
  yield takeLatest('GET_USER', dataUsers);
  yield takeLatest('GET_USER_DETAILS', dataUsersDetails);
  yield takeLatest('GET_UPDATE', updateDataUser);
}

export default UserSaga;
