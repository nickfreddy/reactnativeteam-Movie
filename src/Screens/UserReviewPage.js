import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import UserReview from '../components/UserReview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const UserReviewPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#114E60', flex: 1}}>
      <View
        style={{
          width: Dimensions.get('screen').width,  
          flexDirection: 'row',
          backgroundColor: '#325288', 
          alignItems: 'center',
          justifyContent:'space-between',
          paddingVertical:10,
          paddingHorizontal:10
        }}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <AntDesign name="left" size={23} color="white" />
            <Text style={{fontSize: 25, color: 'white', marginLeft: 10}}>
              User Review
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
      <UserReview />
    </View>
  );
};

export default UserReviewPage;
