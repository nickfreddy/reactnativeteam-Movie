import {combineReducers} from 'redux';
import genre from './GenreReducer';
import movie from './Movie';
import AllRev from './AllrevReducer';
import auth from './auth';
import User from './UserReducer';
import review from './review';

export default combineReducers({
  genre,
  movie,
  AllRev,
  auth,
  User,
  review,
});
