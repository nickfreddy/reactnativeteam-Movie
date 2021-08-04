import {put, select} from '@redux-saga/core/effects';
import axios from 'axios';
import {takeLatest} from 'redux-saga/effects';

function* AllRevsData(action) {
  try {
    const resAllRevData = yield axios.get('http://10.0.2.2:3000/data');
    yield put({type: 'GET_ALL_REV_SUCCESS', data: resAllRevData.data});
    console.log(resAllRevData.data);
  } catch (err) {
    console.log(err);
  }
}

function* AllRevDataDetails(action) {
  const review_Id = yield select(state => state.AllRev.reviewId);
  try {
    const resDetailReview = yield axios.get(
      `http://10.0.2.2:3000/data?movie_id._id=${action.movie_id}`,
    );
    yield put({
      type: 'GET_REVIEW_DETAILS_SUCCESS',
      dataReviewDetails: resDetailReview.data,
    });
    console.log(resDetailReview.data);
  } catch (err) {
    console.log(err);
  }
}

function* AllRevSaga() {
  yield takeLatest('GET_ALL_REV', AllRevsData);
  yield takeLatest('GET_REVIEW_DETAILS', AllRevDataDetails);
}

export default AllRevSaga;
