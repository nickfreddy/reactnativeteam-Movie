import React from 'react';
import {View, Text} from 'react-native';
import UserReview from '../components/UserReview';
import HeaderReview from '../components/HeaderReview';
import AntDesign from 'react-native-vector-icons/AntDesign';

const UserReviewPage = () => {
  return (
    <View style={{backgroundColor: '#114E60', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#325288',
          height: 62,
          alignItems: 'center',
          marginLeft: 5,
        }}>
        <AntDesign name="left" size={23} color="white" />
        <Text style={{fontSize: 25, color: 'white', marginLeft: 10}}>
          User Review
        </Text>
        <View style={{position: 'absolute', left: 360}}>
          <AntDesign name="user" size={35} color="white" />
        </View>
      </View>
      <UserReview />
    </View>
  );
};

export default UserReviewPage;
