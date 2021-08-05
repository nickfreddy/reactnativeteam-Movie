import { put, select } from "@redux-saga/core/effects";
import axios from "axios";
import { call, takeLatest } from "redux-saga/effects";

function* dataMovies(action) {
    try {
        const resDataMovies = yield axios.get('https://demovie.gabatch13.my.id/movies?page=1&limit=5')  
        yield put({type:'GET_DATA_SUCCESS', data: resDataMovies.data.dataMovie})
        
    }
    catch (err) {
        console.log(err)
    }
}

async function getDetails(movieId) {
    const response = await axios.get(`https://demovie.gabatch13.my.id/movies/${movieId}?revlimit=3&revpage=1`)
                                .then(res => res.data)
                                .catch(err => console.log(err))
    return response
}

function* dataMoviesDetails(action) {
    const movie_id = yield select(state => state.movie.movieId)
    try {
        const resDetailMovies = yield getDetails(movie_id)
        console.log(resDetailMovies)
        yield put({type:'GET_MOVIE_DETAILS_SUCCESS', dataDetails: resDetailMovies.data})
    } 
    catch (err) {
        console.log(err)
    }
}

function* movieSaga() {
  yield takeLatest('GET_DATA', dataMovies);
  yield takeLatest('GET_MOVIE_DETAILS', dataMoviesDetails);
}

export default movieSaga;
