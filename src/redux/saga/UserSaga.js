import {put, select} from '@redux-saga/core/effects';
import axios from 'axios';
import {takeLatest} from 'redux-saga/effects';
import {getUserId, getHeaders} from '../../components/loginFunct';

function* dataUsers(action) {
  try {
    const resUserId = yield getUserId();
    const resdataUsers =
      yield axios.get(`https://demovie.gabatch13.my.id/users/${resUserId}
    `);
    yield put({type: 'GET_USER_SUCCESS', data: resdataUsers.data});
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
    yield put({
      type: 'UPDATE_USER_SUCCESS',
      dataUpdateUser: resUpDetailUser.data,
    });
  } catch (err) {
    console.log(err);
  }
}

function* updatePhotoUser(action) {
  try {
    const resUserId = yield getUserId();
    const headers = yield getHeaders();
    const data = new FormData();
    data.append('photo', {
      uri: action.uri,
      name: action.name,
      type: action.type,
    });
    const resUpPhotoUser = yield axios({
      method: 'PUT',
      url: `https://demovie.gabatch13.my.id/users/${resUserId}`,
      headers,
      data: action.data,
    });
    yield put({
      type: 'UPDATE_PHOTO_SUCCESS',
      dataUpdatePhoto: resUpPhotoUser.data,
    });
  } catch (err) {
    console.log(err);
  }
}

function* UserSaga() {
  yield takeLatest('GET_USER', dataUsers);
  yield takeLatest('GET_USER_DETAILS', dataUsersDetails);
  yield takeLatest('UPDATE_USER', updateDataUser);
  yield takeLatest('UPDATE_PHOTO', updatePhotoUser);
}

export default UserSaga;
