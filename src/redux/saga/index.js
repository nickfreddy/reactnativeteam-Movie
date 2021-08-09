import {all} from 'redux-saga/effects';
import movieSaga from './movieSaga';
import AllRevSaga from './AllRevSaga';
import authSaga from './authSaga';
import UserSaga from './UserSaga';
import reviewSaga from './reviewSaga';

export default function* rootSagas() {
  yield all([movieSaga(), AllRevSaga(), authSaga(), UserSaga(), reviewSaga()]);
}
