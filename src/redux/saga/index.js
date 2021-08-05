import {all} from 'redux-saga/effects';
import movieSaga from './movieSaga';
import AllRevSaga from './AllRevSaga';
import authSaga from './authSaga';

export default function* rootSagas() {
  yield all([movieSaga(), AllRevSaga(), authSaga()]);
}
