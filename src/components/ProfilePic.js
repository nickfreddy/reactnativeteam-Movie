import React from 'react';
import {View, Text, Image} from 'react-native';

const ProfilePic = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{
          height: 110,
          width: 110,
          borderRadius: 1000,
        }}
        source={require('../components/Tita.png')}
      />
    </View>
  );
};

export default ProfilePic;
