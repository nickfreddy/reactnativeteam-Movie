import { put, select } from "@redux-saga/core/effects";
import axios from "axios";
import { takeLatest } from "redux-saga/effects";

function* dataMovies(action) {
    try {
        const resDataMovies = yield axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9c4e75bc7c12882201bbc19a846352ba&language=en-US&page=1')
        yield put({type:'GET_DATA_SUCCESS', data: resDataMovies.data.results})
        
    }
    catch (err) {
        console.log(err)
    }
}

function* dataMoviesDetails(action) {
    const movie_id = yield select(state => state.movie.movieId)
    try {
        const resDetailMovies = yield axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=9c4e75bc7c12882201bbc19a846352ba&language=en-US`)
        yield put({type:'GET_MOVIE_DETAILS_SUCCESS', dataDetails: resDetailMovies})
    } 
    catch (err) {
        console.log(err)
    }
}

function* movieSaga() {
    yield takeLatest('GET_DATA', dataMovies)
    yield takeLatest('GET_MOVIE_DETAILS', dataMoviesDetails)
}

export default movieSaga