import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';

const NewModal = (props) => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.review.isLoading)
  
  return (
      <Modal visible={props.modalState} transparent={true} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.containerModal}>
            <Text style={styles.headlineText}>
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
                  onFinishRating={props.ratingHandler}
                />
              </View>
            </View>
            <TextInput
              style={{
                ...styles.inputBox,
                textAlignVertical: 'top',
              }}
              multiline={true}
              numberOfLines={5}
              placeholder="Comment here"
              onChangeText={props.commentInput}
              value={props.value}
            />
            <View style={{margin: 20, width: 150}}>
              {loading 
              ? <ActivityIndicator size='large' color='blue' /> 
              : <TouchableOpacity
                  onPress={() => props.handleComment()}
                  style={styles.modalButton}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
                </TouchableOpacity>
            }
              
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                  marginVertical:10
                }}>
                <AntDesign
                  name="delete"
                  size={23}
                  color="black"
                  onPress={() => props.onPressTrash()}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
  );
};

export default NewModal;

const styles = StyleSheet.create({
  modalBackground : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(128,128,128,0.5)',
  },
  containerModal : {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4EEE8',
    borderWidth: 4,
    borderRadius: 10,
    width: '85%',
  },
  headlineText : {
    margin: 10, 
    fontWeight: 'bold', 
    fontSize: 18
  },
  inputBox : {
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('screen').width - 100,
    margin: 10,
  },
  modalButton : {
    borderWidth: 1,
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'black',
  }
})
