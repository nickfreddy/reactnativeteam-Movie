import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';

const EditReview = () => {
  const [title, setTitle] = useState();
  const [comment, setComment] = useState();
  const [id, setId] = useState();

  const getData = () => {
    axios
      .get('')
      .then(res => {
        props.GetDataSuccess(res.data);
      })
      .catch(err => console.log(err));
  };

  const updateData = () => {
    let NewPostData = {
      title,
      comment,
    };
    axios.put(``, NewPostData).then(res => {
      console.log('update:', res.data);
      getData();
      setTitle();
      setComment();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#F4EEE8',
        borderWidth: 4,
        borderRadius: 10,
        width: '85%',
        marginLeft: 30,
        marginTop: 80,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{margin: 10, fontWeight: 'bold', fontSize: 18}}>
          How do you think about this movie?
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Rating
              type="custom"
              ratingCount={5}
              imageSize={23}
              showRating
              tintColor="#F4EEE8"
              ratingTextColor="black"
            />
          </View>
        </View>

        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: Dimensions.get('screen').width - 100,
            margin: 10,
          }}
          placeholder="Title"
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: Dimensions.get('screen').width - 100,
            margin: 10,
            textAlignVertical: 'top',
          }}
          multiline={true}
          numberOfLines={5}
          placeholder="Comment here baby"
        />
        <View style={{margin: 20, width: 150}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              backgroundColor: 'black',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditReview;
