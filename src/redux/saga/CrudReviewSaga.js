import axios from 'axios';
import {takeLatest, put} from '@redux-saga/core/effects';
import {getHeaders} from '../../components/loginFunct';

function* getUserReview(action) {
  try {
    const resUserReview = yield axios.get(
      'https://demovie.gabatch13.my.id/users/userid/reviews',
    );
    yield put({type: 'GET_USER_REVIEW_SUCCESS', data: resUserReview.data});
  } catch (err) {
    console.log(err);
  }
}

function* createReview(action) {
  try {
    console.log('Creating Review');
    const headers = yield getHeaders();

    const resCreateReview = yield axios({
      method: 'POST',
      url: 'https://demovie.gabatch13.my.id/movies/6106ba258278ce1864d5c199/reviews',
      data: action.data,
      headers,
    });

    if (resCreateReview && resCreateReview.data) {
      console.log(resCreateReview.data);
      yield put({type: 'CREATE_REVIEW_SUCCESS'});
      yield put({type: 'GET_USER'});
    }
    console.log('Create blog success');
  } catch (err) {
    console.log(err);
    yield put({type: 'CREATE_REVIEW_FAILED'});
  }
}

function* CrudReview() {
  yield takeLatest('GET_USER', getUserReview);
  yield takeLatest('CREATE_REVIEW', createReview);
}

export default CrudReview;
