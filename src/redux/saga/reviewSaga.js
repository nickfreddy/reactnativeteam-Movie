import axios from "axios";
import { select, takeLatest, put } from "redux-saga/effects";
import {getHeaders} from '../../components/loginFunct';
import qs from 'qs';


function* postData(action) {
    const movieId = yield select(state => state.review.movieIdModal);
    try {
        const headers = yield getHeaders();
        const resPostComment = yield axios({
            method: 'POST',
            url: `https://demovie.gabatch13.my.id/movies/${movieId}/reviews/`,
            headers: {...headers, 'Content-Type': 'application/x-www-form-urlencoded'},
            data: qs.stringify(action.dataPost),
            });
        yield put({
            type: 'POST_COMMENT_SUCCESS',
        });
    }
    catch(err) {
        console.log(err)
        yield put({
            type: 'POST_COMMENT_FAILED',
        });
    }
}

function* deletePost(action) {
    try {
        const headers = yield getHeaders();
        const resDeleteComment= yield axios({
            method: 'delete',
            url: `https://demovie.gabatch13.my.id/movies/${action.data.movieId}/reviews/${action.data.reviewId}`,
            headers
        })
        yield put({type: 'POST_DELETE_SUCCESS'})
    }
    catch (err) {
        console.log(err)
        yield put({type: 'POST_DELETE_FAILED'})
    }
}

function* editPost(action) {
    const movieId = yield select(state => state.review.movieIdModal);
    const reviewId = yield select(state => state.review.reviewIdModal)
    try {
        const headers = yield getHeaders();
        console.log(`https://demovie.gabatch13.my.id/movies/${movieId}/reviews/${reviewId}`)
        const resPostComment = yield axios({
            method: 'PUT',
            url: `https://demovie.gabatch13.my.id/movies/${movieId}/reviews/${reviewId}`,
            headers: {...headers, 'Content-Type': 'application/x-www-form-urlencoded'},
            data: qs.stringify(action.dataPost),
            })
        yield put({
            type: 'POST_EDIT_SUCCESS',
        });
    }
    catch(err) {
        console.log(err)
        yield put({
            type: 'POST_EDIT_FAILED',
        });
    }
}

export default function* reviewSaga() {
    yield takeLatest('POST_COMMENT', postData);
    yield takeLatest('POST_DELETE', deletePost);
    yield takeLatest('POST_EDIT', editPost)
}