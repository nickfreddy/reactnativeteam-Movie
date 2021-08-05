import {put, select} from '@redux-saga/core/effects';
import axios from 'axios';
import {takeLatest} from 'redux-saga/effects';

function* dataUsers(action) {
  try {
    const resdataUsers = yield axios.get('');
    yield put({type: 'GET_USER_SUCCESS', data: resdataUsers.data});
  } catch (err) {
    console.log(err);
  }
}

function* dataUsersDetails(action) {
  const User_Id = yield select(state => state.user.UserId);
  try {
    const resDetailUser = yield axios.get('');
    yield put({
      type: 'GET_USER_DETAILS_SUCCESS',
      dataUserDetails: resDetailUser,
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
