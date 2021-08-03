import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import AntDesign from 'react-native-vector-icons/AntDesign';

const newModal = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <View style={{backgroundColor: 'rgba(128,128,128,0.5)'}}>
      <Modal visible={modalOpen} transparent={true} animationType="slide">
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

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <AntDesign
              name="delete"
              size={23}
              color="black"
              onPress={() => setModalOpen(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default newModal;
