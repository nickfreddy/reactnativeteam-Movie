import { combineReducers } from "redux";
import genre from "./GenreReducer";
import movie from "./Movie";
import modal from "./modal";

export default combineReducers({
    genre, movie, modal
})