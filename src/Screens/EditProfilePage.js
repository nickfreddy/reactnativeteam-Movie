import React, {useState,} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TxtInput from '../components/TxtInput';
import ProfilePic from '../components/ProfilePic';
import HeaderEdit from '../components/HeaderEdit';
import {useDispatch, useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DesInput from '../components/DesInput';
import {useNavigation} from '@react-navigation/native';

const EditProfilePage = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const isLoading = useSelector(state => state.User.loading);

  const [image, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  );

  const handleUpload = () => {
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = response.assets[0];
        console.log('response source =', source);
        setImage(source.uri);
        const uploadImage = {
          uri: source.uri,
          name: source.fileName,
          type: source.type,  
        };
      }
    });
  };

  const handleUpdate = () => {
    const newUpdateData = {
      username,
      email,
      description,
      photo: image,
    };
    dispatch(
      {type: 'UPDATE_USER', dataPost: newUpdateData},
      {type: 'UPDATE_PHOTO'},
    );
  };

  return (
    
    <View style={{height:'100%', backgroundColor: '#114E60'}}>
      <HeaderEdit
        onPress={() => {
          handleUpdate();
          Alert.alert('Profile Changed', 'Your Profile has been updated', [
            {text: 'Confirm', onPress: () => {
              dispatch({type:'GET_USER'})
              navigation.navigate('UserReview')
            }},
          ]);
        }}
        />
        <ScrollView>
        <View style={{top: 30, marginBottom: 30}}>
          <ProfilePic onPress={() => handleUpload()} image={image} />
          <View style={{left: 230, bottom: 20}}>
            <AntDesign name="edit" size={25} color="gold" />
          </View>
        </View>
        <TxtInput
          title="Username"
          BGcolor="#114E60"
          input={text => setUsername(text)}
          value={username}
          />
        <TxtInput
          title="Email"
          BGcolor="#114E60"
          input={text => setEmail(text)}
          value={email}
          />
        <DesInput
          title="description"
          BGcolor="#114E60"
          input={text => setDescription(text)}
          value={description}
          />
        </ScrollView>
    </View>
  );
};

export default EditProfilePage;
