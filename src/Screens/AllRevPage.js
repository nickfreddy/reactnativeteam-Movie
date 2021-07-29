import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AllReview from '../components/AllReview';
import HeaderReview from '../components/HeaderReview';

const AllReviewPage = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#114E60'}}>
      <HeaderReview title="AllReview" />
      <AllReview />
      <View
        style={{
          position: 'absolute',
          width: 50,
          height: 50,
          left: 310,
          top: 510,
        }}>
        <AntDesign name="pluscircle" size={50} color="gold" />
      </View>
    </View>
  );
};

export default AllReviewPage;
