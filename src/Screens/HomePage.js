import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,ActivityIndicator, ScrollView} from 'react-native';

import Genre from '../components/Genre';
import Movies from '../components/Movies';
import SearchBox from '../components/SearchBox';

import { useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import NewModal from '../components/NewModal';


const HomePage = props => {
  const dispatch = useDispatch();
  const modal_redux = useSelector(state => state.review.modalState);
  const headline_redux = useSelector(state => state.genre.headline);
  const movies_redux = useSelector(state => state.movie.movieData)
  const isloading = useSelector(state => state.movie.loading)
  const isLoadingMore = useSelector(state => state.movie.loadingMore)
  const [commentInput, setCommentInput] = useState('')
  const [rating, setRating] = useState(0)

  useEffect(() => {
    dispatch({type: 'GET_DATA'})
    dispatch({type: 'GET_USER'})
  }, [])
  
  const handleComment = () => {
    let newPost = {
      rating,
      comment: commentInput
    }
    dispatch({type: 'POST_COMMENT', dataPost: newPost})
    setCommentInput('')
    dispatch({type: 'CLOSE_MODAL'})
  }

  const openModal = (data) => {
    dispatch({type: 'OPEN_MODAL', movieId: data._id});
  };

  const closeModal = () => {
    setCommentInput('')
    dispatch({type: 'CLOSE_MODAL'});
  };

  const navigateDetails = data => {
    dispatch({type: 'GET_MOVIE_ID', movieId: data._id});
    props.navigation.navigate('MovieDetails', {movieId: data._id});
  };

  const getMoreData = () => {
    dispatch({type: 'GET_MORE_MOVIE'})
  }
 
  

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.backgroundBase}>
        <NewModal
          modalState={modal_redux}
          onSubmitModal={closeModal}
          modalClose={closeModal}
          ratingHandler={(input) => setRating(input)}
          commentInput={(text) => setCommentInput(text)}
          value={commentInput}
          handleComment={() => handleComment()}
          onPressTrash={() => closeModal()}
        />
        <SearchBox />
        <Genre />
        <View style={{padding: 10, marginHorizontal: 10}}>
          <Text style={styles.headerText}>Hot{`${(headline_redux === '') ? " " : " " + headline_redux+" " }`}Movies</Text>
        </View>
        <ScrollView>
        {isloading 
        ? <ActivityIndicator size='large' color='blue' /> 
        : movies_redux.map((item, index) => {
          if(index + 1 > movies_redux.length -1) {
            if(isLoadingMore) {
              return (
                <ActivityIndicator size='large' color='blue' />
              )
            }
            else {
              return (
                <TouchableOpacity key={index} style={{
                  alignSelf:'center',
                  alignItems:'center', 
                  justifyContent:'center',
                  backgroundColor:'orange',
                  width: '80%',
                  padding:10,
                  borderRadius:20
                  }}
                  onPress={()=> getMoreData()}
                  >
                  <Text style={{color:'white'}}>MORE</Text>
                </TouchableOpacity>
                )
            };
          } else {
            return (
              <View key={index}>
                <Movies
                title={item.title}
                genre={item.genres}
                releaseYear={item.release_year}
                overview={item.synopsis}
                rating={item.averageRating === null ? "-" : item.averageRating}
                posterPath={item.poster}
                modalShow={() => openModal(item)}
                onPress={() => navigateDetails(item)}
                />
              </View>
              )
            };
            })
          }
        </ScrollView>
        
        
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
