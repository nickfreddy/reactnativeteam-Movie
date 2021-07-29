import { combineReducers } from "redux";
import genre from "./GenreReducer";
import movie from "./Movie";

export default combineReducers({
    genre, movie
})