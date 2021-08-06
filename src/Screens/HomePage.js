import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity,ActivityIndicator} from 'react-native';

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
  const movies_redux = useSelector(state => state.movie.movieData)
  const isloading = useSelector(state => state.movie.loading)
  console.log('ini redux movie', movies_redux)

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
      return (
        <Movies
          title={item.title}
          genre={item.genres}
          releaseYear={item.release_year}
          overview={item.synopsis}
          rating={item.averageRating === null ? "-" : item.averageRating}
          posterPath={item.poster}
          modalShow={openModal}
          onPress={() => navigateDetails(item)}
        />
      );
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
          <Text style={styles.headerText}>Hot{`${(headline_redux === '') ? " " : " " + headline_redux+" " }`}Movies</Text>
        </View>
        {isloading ? <ActivityIndicator size='large' color='blue' /> : 
        <FlatList
        data={movies_redux}
        keyExtractor={(elem, i) => i}
        renderItem={renderItem}
        />
      }
        
        
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
