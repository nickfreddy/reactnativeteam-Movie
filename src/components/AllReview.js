import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect, useDispatch} from 'react-redux';

const AllReview = props => {
  const dispatch = useDispatch();
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
            source={{uri: props.photo}}
          />
          <View style={{marginLeft: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="star" size={18} color="gold" />
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', marginTop: 5}}>
                  {props.rating}
                </Text>
                <Text style={{marginTop: 5}}>/5</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text>Reviewer: </Text>
              <Text style={{fontWeight: 'bold'}}>{props.username}</Text>
            </View>
          </View>
        </View>
        <Text style={{marginTop: 10, marginLeft: 10}}>{props.comment}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AllReview;
