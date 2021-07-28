import React from 'react';
import {View, Text} from 'react-native';
import UserReview from '../components/UserReview';
import HeaderReview from '../components/HeaderReview';

const UserReviewPage = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <HeaderReview title="User Review" />
      <UserReview />
    </View>
  );
};

export default UserReviewPage;
