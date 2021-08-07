import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const HeaderEdit = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#325288',
        height: 62,
        alignItems: 'center',
        padding: 10,
      }}>
      <AntDesign
        name="close"
        size={23}
        color="white"
        onPress={() => navigation.navigate('UserReview')}
      />
      <Text style={{fontSize: 25, color: 'white', marginLeft: 10}}>
        Edit Profile
      </Text>
      <View style={{position: 'absolute', left: 360}}>
        <AntDesign
          name="check"
          size={23}
          color="white"
          onPress={() => props.onPress()}
        />
      </View>
    </View>
  );
};

export default HeaderEdit;
