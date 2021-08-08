import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Modal, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {connect, useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'

import UserHeader from '../components/UserHeader';
import UserReviews from '../components/UserReviews';
import NewModal from '../components/NewModal';
const UserReviewPage = props => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.review.isLoading)
  const user_redux = useSelector(state => state.User.userData);
  const modal_redux = useSelector(state => state.review.modalState);
  const [commentInput, setCommentInput] = useState('')
  const [rating, setRating] = useState(1)
  
  // console.log('user review',user_redux.reviews);
  // console.log('user detail', user_redux)

  useEffect(() => {
    dispatch({type: 'GET_USER'});
  }, [isLoading]);
  
  const handleDelete = (data) => {
    dispatch({type: 'POST_DELETE', data:{reviewId: data._id, movieId: data.movie_id._id}})
  }
  
  const handleReviewEdit = () => {
    let newPost = {
      rating,
      comment: commentInput
    }
    dispatch({type: 'POST_EDIT', dataPost: newPost})
    dispatch({type: 'CLOSE_MODAL'})
  }
  
  const openModal = (data) => {
    dispatch({type: 'OPEN_MODAL_EDIT', data:{reviewId: data._id, movieId: data.movie_id._id}});
  };

  const closeModal = () => {
    setCommentInput('')
    dispatch({type: 'CLOSE_MODAL'});
  };

  const handleLogout = () => {

  }

  const renderUserRev = ({item, index}) => {
      return (
        <UserReviews
          photo={item.movie_id.poster}
          movieTitle={item.movie_id.title}
          createDate={item.createdAt}
          rating={item.rating}
          comment={item.comment}
          onPressDelete={() => handleDelete(item)}
          modalShow={() => openModal(item)}
        />
      );
  };


  return (
    <View style={{backgroundColor: '#114E60', flex: 1}}>
      <UserHeader username={user_redux.username} email={user_redux.email} />
      <NewModal
          modalState={modal_redux}
          onSubmitModal={closeModal}
          modalClose={closeModal}
          ratingHandler={(input) => setRating(input)}
          commentInput={(text) => setCommentInput(text)}
          value={commentInput}
          handleComment={() => handleReviewEdit()}
          onPressTrash={() => closeModal()}
        />
        <FlatList
          data={user_redux.reviews}
          keyExtractor={(elem, i) => i}
          renderItem={renderUserRev}
        />
      <Modal visible={false} transparent={true}>
        <View style={{width:200, height:100, backgroundColor:'white'}}>
            <Text style={{color:'black'}}>Testing</Text>
        </View>
      </Modal>
      <TouchableOpacity style={styles.logoutButton}>
        <Entypo name='log-out' size={30} color='white'/>
      </TouchableOpacity>
    </View>
  );
};

export default UserReviewPage;

const styles = StyleSheet.create ({
  logoutButton : {
    position:'absolute',
    right: 0,
    bottom: 0,
    backgroundColor:"red",
    width:50,
    height:50,
    padding:10,
    borderRadius: 50,
    alignItems:'center',
    margin: 10
  }
})