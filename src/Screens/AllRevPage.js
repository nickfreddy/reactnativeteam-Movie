import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AllReview from '../components/AllReview';
import HeaderReview from '../components/HeaderReview';
import NewModal from '../components/NewModal';
import {connect, useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const AllReviewPage = props => {
  const dispatch = useDispatch();
  const AllRev_redux = useSelector(state => state.AllRev.AllRevData);

  const renderAllRev = ({item, index}) => {
    if (index !== 5) {
      return (
        <AllReview
          movie_id={item.movie_id}
          rating={item.rating}
          username={item.user_id.username}
          comment={item.comment}
          photo={item.user_id.photo}
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
  useEffect(() => {
    dispatch({type: 'GET_ALL_REV'});
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#114E60'}}>
      <HeaderReview title="AllReview" />

      <FlatList
        data={AllRev_redux}
        keyExtractor={(elem, i) => i}
        renderItem={renderAllRev}
      />
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flex: 1,
          margin: 10,
        }}>
        <AntDesign name="pluscircle" size={50} color="gold" />
      </View>
    </View>
  );
};

export default AllReviewPage;
