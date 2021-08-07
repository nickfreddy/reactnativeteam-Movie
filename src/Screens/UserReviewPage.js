import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {connect, useDispatch} from 'react-redux';

import UserHeader from '../components/UserHeader';
import UserReviews from '../components/UserReviews';
import NewModal from '../components/NewModal';
const UserReviewPage = props => {
  const dispatch = useDispatch();
  const user_redux = useSelector(state => state.User.userData);
  const modal_redux = useSelector(state => state.review.modalState);
  const [commentInput, setCommentInput] = useState('')
  const [rating, setRating] = useState(1)
  
  // console.log('user review',user_redux.reviews);
  // console.log('user detail', user_redux)

  useEffect(() => {
    dispatch({type: 'GET_USER'});
  }, []);
  
  const handleDelete = (data) => {
    dispatch({type: 'POST_DELETE', data:{reviewId: data._id, movieId: data.movie_id._id}})
  }
  
  const handleReviewEdit = () => {
    let newPost = {
      rating,
      comment: commentInput
    }
    dispatch({type: 'POST_EDIT', dataPost: newPost})
  }
  
  const openModal = (data) => {
    dispatch({type: 'OPEN_MODAL_EDIT', data:{reviewId: data._id, movieId: data.movie_id._id}});
  };

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  };


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


  // useEffect(() => {
  //   console.log(user_redux);
  //   console.log('haeeeeee');
  // }, [user_redux]);

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
          onPressTrash={() => {
            setCommentInput('')
            closeModal()
          }}
        />
        <FlatList
          data={user_redux.reviews}
          keyExtractor={(elem, i) => i}
          renderItem={renderUserRev}
        />
    </View>
  );
};

export default UserReviewPage;
