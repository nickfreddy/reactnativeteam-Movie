import React, {useState} from 'react';
import {View, Modal} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AllReview from '../components/AllReview';
import HeaderReview from '../components/HeaderReview';
import NewModal from '../components/NewModal';

const AllReviewPage = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#114E60'}}>
      <HeaderReview title="AllReview" />
      <AllReview />
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
