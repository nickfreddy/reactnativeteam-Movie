import {all} from 'redux-saga/effects';
import movieSaga from './movieSaga';
import AllRevSaga from './AllRevSaga';

export default function* rootSagas() {
  yield all([movieSaga(), AllRevSaga()]);
}
