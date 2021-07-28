import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AllReview = props => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          borderWidth: 1,
          margin: 10,
          borderRadius: 15,
          padding: 15,
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 1000,
            }}
            source={require('../components/Tita.png')}
          />
          <View style={{marginLeft: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="star" size={18} color="gold" />
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', marginTop: 5}}> 9</Text>
                <Text style={{marginTop: 5}}>/10</Text>
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, marginLeft: 10}}>
                  Great
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text>Reviewer: </Text>
              <Text style={{fontWeight: 'bold'}}>Tita</Text>
            </View>
          </View>
        </View>
        <Text style={{marginTop: 10, marginLeft: 10}}>There you go</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AllReview;
