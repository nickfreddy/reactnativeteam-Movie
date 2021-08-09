import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect, useDispatch} from 'react-redux';

const AllReview = props => {
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback onPress={() => props.onPress()}>
      <View
        style={{
          borderWidth: 1,
          margin: 10,
          borderRadius: 15,
          padding: 15,
          backgroundColor: 'white',
          flex: 1,
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
          <View style={{marginLeft: 10, flex: 1, paddingRight: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="star" size={18} color="gold" />
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <Text style={{fontWeight: 'bold', marginTop: 5, marginLeft: 5}}>
                  {props.rating}
                </Text>
                <Text style={{marginTop: 5}}>/5</Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 10,
                    marginTop: 3,
                    width: '100%',
                    flex: 1,
                  }}
                  numberOfLines={1}>
                  {props.movieRev}
                </Text>
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
