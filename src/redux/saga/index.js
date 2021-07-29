import { all } from "redux-saga/effects";
import movieSaga from "./movieSaga";

export default function* rootSagas() {
    yield all([movieSaga()])
}