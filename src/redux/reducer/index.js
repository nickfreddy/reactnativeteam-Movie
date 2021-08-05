import {combineReducers} from 'redux';
import genre from './GenreReducer';
import movie from './Movie';
import modal from './modal';
import AllRev from './AllrevReducer';
import auth from './auth';

export default combineReducers({
  genre,
  movie,
  modal,
  AllRev,
  auth,
});
