import {put, select} from '@redux-saga/core/effects';
import axios from 'axios';
import {takeLatest} from 'redux-saga/effects';

function* AllRevsData(action) {
  try {
    const resAllRevData = yield axios.get('');
    yield put({type: 'GET_ALL_REV_SUCCESS', data: resAllRevData.data});
  } catch (err) {
    console.log(err);
  }
}

function* AllRevDataDetails(action) {
  const review_Id = yield select(state => state.allrev.reviewId);
  try {
    const resDetailReview = yield axios.get('');
    yield put({
      type: 'GET_REVIEW_DETAILS_SUCCESS',
      dataDetails: resDetailReview,
    });
  } catch (err) {
    console.log(err);
  }
}

function* AllRevSaga() {
  yield takeLatest('GET_ALL_REV', AllRevsData);
  yield takeLatest('GET_REVIEW_DETAILS', AllRevDataDetails);
}

export default AllRevSaga;
