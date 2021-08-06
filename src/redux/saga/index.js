import {all} from 'redux-saga/effects';
import movieSaga from './movieSaga';
import AllRevSaga from './AllRevSaga';
import authSaga from './authSaga';
import UserSaga from './UserSaga';

export default function* rootSagas() {
  yield all([movieSaga(), AllRevSaga(), authSaga(), UserSaga()]);
}
