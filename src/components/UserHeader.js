import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const UserHeader = props => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          width: Dimensions.get('screen').width,
          flexDirection: 'row',
          backgroundColor: '#325288',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}>
        <View style={{marginLeft: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', fontSize: 20}}>Reviewer : </Text>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
              {props.username}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', fontSize: 16}}>Email : </Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
              {props.email}
            </Text>
          </View>
        </View>
        <View style={{left: 0}}>
          <TouchableOpacity>
            <AntDesign
              name="user"
              size={35}
              color="white"
              onPress={() => navigation.navigate('EditProfile')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserHeader;
