import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment'

const UserReviews = props => {
  return (
    <View>
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
              source={{uri: props.photo}}
            />
            <View style={{marginLeft: 10}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {props.movieTitle}
                </Text>
                <Text> Reviewed on : {moment(props.createDate).format('MMM Do YYYY')}</Text>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name="star" size={18} color="gold" />
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}> {props.rating}</Text>
                    <Text>/5</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <TouchableOpacity onPress={() => props.modalShow()}>
                  <AntDesign
                    name="edit"
                    size={25}
                    color="gold"
                    style={{marginRight: 20}}
                  />
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={() => props.onPressDelete()}>
                  <AntDesign name="delete" size={25} color="gold" />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
          <Text style={{marginTop: 10, marginLeft: 10, fontWeight: 'bold'}}>
            {props.comment}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default UserReviews;
