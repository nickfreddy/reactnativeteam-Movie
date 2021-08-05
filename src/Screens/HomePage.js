import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import Genre from '../components/Genre';
import Movies from '../components/Movies';
import SearchBox from '../components/SearchBox';

import {connect, useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import NewModal from '../components/NewModal';
import {getToken} from '../components/loginFunct';

const HomePage = props => {
  const dispatch = useDispatch();
  const modal_redux = useSelector(state => state.modal.modalState);
  const headline_redux = useSelector(state => state.genre.headline);
  const movies_redux = useSelector(state => state.movie.movieData);
  console.log('ini movie', movies_redux);
  const openModal = () => {
    dispatch({type: 'OPEN_MODAL'});
  };

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  };

  const navigateDetails = data => {
    dispatch({type: 'GET_MOVIE_ID', movieId: data._id});
    props.navigation.navigate('MovieDetails', {movieId: data._id});
  };

  const renderItem = ({item, index}, headline) => {
    // const filterGenres = movies_redux.map((item)=> )

    if (index !== 5) {
      return (
        <Movies
          title={item.title}
          genre={item.genres[0]}
          releaseYear={item.release_year}
          overview={item.synopsis}
          rating={item.averageRating}
          posterPath={item.poster}
          modalShow={openModal}
          onPress={() => navigateDetails(item)}
        />
      );
    } else {
      return (
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white'}}>More</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.backgroundBase}>
        <NewModal
          modalState={modal_redux}
          onSubmitModal={closeModal}
          modalClose={closeModal}
        />
        <SearchBox />
        <Genre />
        <View style={{padding: 10, marginHorizontal: 10}}>
          <Text style={styles.headerText}>Hot {headline_redux} Movies</Text>
        </View>
        <FlatList
          data={movies_redux}
          keyExtractor={(elem, i) => i}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  backgroundBase: {
    backgroundColor: '#114E60',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 10,
    height: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
