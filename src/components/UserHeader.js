import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
        <View style={{marginLeft: 10, fontSize: 16}}>
          <Text style={{color: 'white', fontSize: 20}}>Reviewer :</Text>
          <Text style={{color: 'white', fontSize: 16}}>
            {props.username}({props.email})
          </Text>
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
