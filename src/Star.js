import React from 'react';
import {View, Text} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';

const Star = () => {
  return (
    <View>
      <Rating type="star" ratingCount={5} imageSize={50} showRating />
    </View>
  );
};

export default Star;
