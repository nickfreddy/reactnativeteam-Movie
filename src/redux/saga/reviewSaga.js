import axios from "axios";
import { select, takeLatest, put } from "redux-saga/effects";
import {getHeaders} from '../../components/loginFunct';
import qs from 'qs';


function* postData(action) {
    const movieId = yield select(state => state.review.movieIdModal);
    try {
        console.log('mulai post')
        const headers = yield getHeaders();
        const resPostComment = yield axios({
            method: 'POST',
            url: `https://demovie.gabatch13.my.id/movies/${movieId}/reviews/`,
            headers: {...headers, 'Content-Type': 'application/x-www-form-urlencoded'},
            data: qs.stringify(action.dataPost),
            });
        console.log('post success', resPostComment.data)
        yield put({
            type: 'POST_COMMENT_SUCCESS',
        });
        console.log('selesai success')
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
        console.log('mulai')
        const headers = yield getHeaders();
        const resDeleteComment= yield axios({
            method: 'delete',
            url: `https://demovie.gabatch13.my.id/movies/${action.data.movieId}/reviews/${action.data.reviewId}`,
            headers
        })
        console.log('delete success', resDeleteComment.data)
        yield put({type: 'POST_DELETE_SUCCESS'})
        console.log('delete sukses')
    }
    catch (err) {
        console.log(err)
        yield put({type: 'POST_DELETE_FAILED'})
        console.log('delete gagal')
    }
}

function* editPost(action) {
    const movieId = yield select(state => state.review.movieIdModal);
    const reviewId = yield select(state => state.review.reviewIdModal)
    try {
        console.log('mulai edit')
        const headers = yield getHeaders();
        console.log(`https://demovie.gabatch13.my.id/movies/${movieId}/reviews/${reviewId}`)
        const resPostComment = yield axios({
            method: 'PUT',
            url: `https://demovie.gabatch13.my.id/movies/${movieId}/reviews/${reviewId}`,
            headers: {...headers, 'Content-Type': 'application/x-www-form-urlencoded'},
            data: qs.stringify(action.dataPost),
            })
        console.log('edit success', resPostComment.data)
        yield put({
            type: 'POST_EDIT_SUCCESS',
        });
        console.log('selesai success')
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