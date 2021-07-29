import { put } from "@redux-saga/core/effects";
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

function* movieSaga() {
    yield takeLatest('GET_DATA', dataMovies)
}

export default movieSaga