import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import AllReview from '../components/AllReview';
import HeaderReview from '../components/HeaderReview';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const AllReviewPage = props => {
  const dispatch = useDispatch();
  const AllRev_redux = useSelector(state => state.AllRev.AllRevData);
  const loading = useSelector(state => state.AllRev.isLoading)
  console.log(AllRev_redux)
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
          onPress={() => navigateDetails(item)}
        />
      );
    }
  };

  useEffect(() => {
    dispatch({type: 'GET_ALL_REV'});
  }, []);

  const navigateDetails = data => {
    dispatch({type: 'GET_MOVIE_ID', movieId: data.movie_id._id});
    props.navigation.navigate('MovieDetails', {movieId: data.movie_id._id});
  };


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
    </View>
  );
};

export default AllReviewPage;

