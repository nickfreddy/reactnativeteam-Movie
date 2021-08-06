import {put, select} from '@redux-saga/core/effects';
import axios from 'axios';
import {takeLatest} from 'redux-saga/effects';
import {getUserId} from '../../components/loginFunct';

function* dataUsers(action) {
  try {
    console.log('mulai get user');
    const resUserId = yield getUserId();
    const resdataUsers =
      yield axios.get(`https://demovie.gabatch13.my.id/users/${resUserId}
    `);
    //console.log('++++>', resUserId);
    //console.log('===>', resdataUsers.data);
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

function* UserSaga() {
  yield takeLatest('GET_USER', dataUsers);
  yield takeLatest('GET_USER_DETAILS', dataUsersDetails);
}

export default UserSaga;
