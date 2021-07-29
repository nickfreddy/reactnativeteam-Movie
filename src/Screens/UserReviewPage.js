import React from 'react';
import {View, Text} from 'react-native';
import UserReview from '../components/UserReview';
import HeaderReview from '../components/HeaderReview';
import Star from '../Star';

const UserReviewPage = () => {
  return (
    <View style={{backgroundColor: '#114E60', flex: 1}}>
      <HeaderReview title="User Review" />
      <UserReview />
    </View>
  );
};

export default UserReviewPage;
