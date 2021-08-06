import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import UserHeader from '../components/UserHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {connect, useDispatch} from 'react-redux';

const UserReviewPage = props => {
  const dispatch = useDispatch();
  const user_redux = useSelector(state => state.User.userData);
  //console.log(user_redux);

  useEffect(() => {
    dispatch({type: 'GET_USER'});
  }, []);

  // useEffect(() => {
  //   console.log(user_redux);
  //   console.log('haeeeeee');
  // }, [user_redux]);

  return (
    <View style={{backgroundColor: '#114E60', flex: 1}}>
      {/* {user_redux((item, index) => ( */}
      <UserHeader username={user_redux.username} email={user_redux.email} />
      {/* ))} */}
    </View>
  );
};

export default UserReviewPage;
