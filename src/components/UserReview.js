import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const UserReview = props => {
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
            Kreisler(Kreisler57@yahoo.com)
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
      <TouchableWithoutFeedback>
        <View
          style={{
            borderWidth: 1,
            margin: 10,
            borderRadius: 15,
            padding: 8,
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: 120,
                width: 80,
                borderRadius: 15,
              }}
              source={require('../components/Tita.png')}
            />
            <View style={{marginLeft: 10}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  Legend of Heroes(2006)
                </Text>
                <Text> Reviewed February 15,2022</Text>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name="star" size={18} color="gold" />
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}> 9</Text>
                    <Text>/10</Text>
                    <Text style={{fontWeight: 'bold', marginLeft: 7}}>
                      Great
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <AntDesign
                  name="edit"
                  size={25}
                  color="gold"
                  style={{marginRight: 20}}
                />
                <AntDesign name="delete" size={25} color="gold" />
              </View>
            </View>
          </View>
          <Text style={{marginTop: 10, marginLeft: 10, fontWeight: 'bold'}}>
            This is the title comment
          </Text>
          <Text style={{marginTop: 10, marginLeft: 10}}>
            This is the comments
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default UserReview;
