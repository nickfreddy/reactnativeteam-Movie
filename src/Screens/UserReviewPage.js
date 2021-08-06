import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import UserHeader from '../components/UserHeader';
import {useSelector} from 'react-redux';
import {connect, useDispatch} from 'react-redux';
import UserReviews from '../components/UserReviews';

const UserReviewPage = props => {
  const dispatch = useDispatch();
  const user_redux = useSelector(state => state.User.userData);
  console.log(user_redux.reviews);

  const renderUserRev = ({item, index}) => {
    if (index !== 5) {
      return (
        <UserReviews
          photo={item.movie_id.poster}
          movieTitle={item.movie_id.title}
          createDate={item.createdAt}
          rating={item.rating}
          comment={item.comment}
        />
      );
    }
  };

  // useEffect(() => {
  //   dispatch({type: 'GET_USER'});
  // }, []);

  // useEffect(() => {
  //   console.log(user_redux);
  //   console.log('haeeeeee');
  // }, [user_redux]);

  return (
    <View style={{backgroundColor: '#114E60', flex: 1}}>
      <UserHeader username={user_redux.username} email={user_redux.email} />

      <FlatList
        data={user_redux.reviews}
        keyExtractor={(elem, i) => i}
        renderItem={renderUserRev}
      />
    </View>
  );
};

export default UserReviewPage;
