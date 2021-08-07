import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AllReview from '../components/AllReview';
import HeaderReview from '../components/HeaderReview';
import NewModal from '../components/NewModal';
import {connect, useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const AllReviewPage = props => {
  const dispatch = useDispatch();
  const AllRev_redux = useSelector(state => state.AllRev.AllRevData);
  const loading = useSelector(state => state.AllRev.isLoading)
  // console.log('===>', AllRev_redux)
  const renderAllRev = ({item, index}) => {
    if (index !== 10) {
      return (
        <AllReview
          movie_id={item.movie_id}
          rating={item.rating}
          username={item.user_id.username}
          comment={item.comment}
          photo={item.user_id.photo === "" ? "https://i1.wp.com/jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png?fit=300%2C300&ssl=1" : item.user_id.photo }
          movieRev={item.movie_id === null ? 'no title' : item.movie_id.title}
        />
      );
    }
  };
  useEffect(() => {
    dispatch({type: 'GET_ALL_REV'});
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#114E60'}}>
      <HeaderReview title="AllReview" />
      {(loading) 
        ? <ActivityIndicator size='large' color='blue' style={{flex:1}} />
        : <FlatList
        data={AllRev_redux}
        keyExtractor={(elem, i) => i}
        renderItem={renderAllRev}
        />
      }
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
//json-server --watch response.json --port 3000
