import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HeaderReview = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#325288',
        height: 62,
        alignItems: 'center',
      }}>
      <AntDesign name="left" size={23} color="white" />
      <Text style={{fontSize: 25, color: 'white'}}>{props.title}</Text>
    </View>
  );
};

export default HeaderReview;
