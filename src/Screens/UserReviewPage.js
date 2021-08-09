import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {connect, useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {removeToken} from '../components/loginFunct';

import UserHeader from '../components/UserHeader';
import UserReviews from '../components/UserReviews';
import NewModal from '../components/NewModal';
const UserReviewPage = props => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.review.isLoading);
  const isLoadingUser = useSelector(state => state.User.loading)
  const user_redux = useSelector(state => state.User.userData);
  const modalEdit_redux = useSelector(state => state.review.modalStateEdit);
  const [commentInput, setCommentInput] = useState('');
  const [rating, setRating] = useState(1);
  const [logoutModal, setLogoutModal] = useState(false);
  // console.log('user review',user_redux.reviews);
  // console.log('user detail', user_redux)

  useEffect(() => {
    console.log('mulai review screen');
    dispatch({type: 'GET_USER'});
  }, [isLoading]);

  const handleDelete = data => {
    dispatch({
      type: 'POST_DELETE',
      data: {reviewId: data._id, movieId: data.movie_id._id},
    });
    dispatch({type: 'GET_USER'})
  };

  const handleReviewEdit = () => {
    let newPost = {
      rating,
      comment: commentInput,
    };
    dispatch({type: 'POST_EDIT', dataPost: newPost});
    setCommentInput('');
    dispatch({type: 'GET_USER'})
    dispatch({type: 'CLOSE_MODAL_EDIT'});
  };

  const openModalEdit = data => {
    console.log('modal for edit');
    dispatch({
      type: 'OPEN_MODAL_EDIT',
      data: {reviewId: data._id, movieId: data.movie_id._id},
    });
  };

  const closeModal = () => {
    setCommentInput('');
    dispatch({type: 'CLOSE_MODAL_EDIT'});
  };

  const handleLogout = () => {};

  const renderUserRev = ({item, index}) => {
    return (
      <UserReviews
        photo={item.movie_id.poster}
        movieTitle={item.movie_id.title}
        createDate={item.createdAt}
        rating={item.rating}
        comment={item.comment}
        onPressDelete={() => handleDelete(item)}
        modalShow={() => openModalEdit(item)}
      />
    );
  };

  return (
    <View style={{backgroundColor: '#114E60', flex: 1}}>
      <UserHeader username={user_redux.username} email={user_redux.email} />
      <View
        style={{
          margin: 5,
          backgroundColor: '#F4EEE8',
          borderWidth: 1,
          borderRadius: 8,
        }}>
        <Text style={{margin: 5}}>{user_redux.description}</Text>
      </View>
      <NewModal
        modalState={modalEdit_redux}
        onSubmitModal={closeModal}
        modalClose={closeModal}
        ratingHandler={input => setRating(input)}
        commentInput={text => setCommentInput(text)}
        value={commentInput}
        handleComment={() => handleReviewEdit()}
        onPressTrash={() => closeModal()}
      />
      {isLoadingUser ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={user_redux.reviews}
          keyExtractor={(elem, i) => i}
          renderItem={renderUserRev}
        />
      )}

      <Modal visible={logoutModal} transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.logoutModalCard}>
            <Text style={{color: 'black'}}>Are you sure want to log out?</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => setLogoutModal(false)}
                style={styles.button}>
                <Text style={{color: 'white'}}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.button, backgroundColor: 'dodgerblue'}}
                onPress={() => {
                  setLogoutModal(false);
                  dispatch({type: 'LOGOUT'});
                }}>
                <Text style={{color: 'white'}}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setLogoutModal(true)}>
        <Entypo name="log-out" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default UserReviewPage;

const styles = StyleSheet.create({
  logoutButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'orange',
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    margin: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  button: {
    backgroundColor: 'red',
    width: '25%',
    padding: 5,
    alignItems: 'center',
    borderRadius: 20,
  },
  logoutModalCard: {
    width: 300,
    height: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
