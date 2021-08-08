import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TxtInput from '../components/TxtInput';
import PassInput from '../components/PassInput';
import ProfilePic from '../components/ProfilePic';
import Button from '../components/Button';
import HeaderEdit from '../components/HeaderEdit';
import {removeToken} from '../components/loginFunct';
import {useDispatch, useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {getUserId, getHeaders} from '../components/loginFunct';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const EditProfilePage = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const [image, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  );
  const [rawImage, setRawImage] = useState();
  const logedIn = useSelector(state => state.auth.isLoggedIn);

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
        setRawImage(source);
        uploadImage({
          uri: source.uri,
          name: source.fileName,
          type: source.type,
        });
        //console.log(source);
      }
    });
  };

  const handleUpdate = () => {
    const newUpdateData = {
      username,
      email,
      password,
      photo: image,
    };
    dispatch({type: 'GET_UPDATE', dataPost: newUpdateData});
  };

  const uploadImage = async image => {
    const resUserId = await getUserId();
    const headers = await getHeaders();
    console.log(resUserId);
    const data = new FormData(); // Make Multipart Form-Data body
    data.append('photo', {
      uri: image.uri,
      name: image.name,
      type: image.type,
    }); // Insert data / image to the data body
    await axios({
      method: 'PUT',
      url: `https://demovie.gabatch13.my.id/users/${resUserId}`, // link to upload image from your Backend
      headers,
      data: data,
    })
      .then(res => {
        // Success Handling
        console.log(res.data);
        console.log('Image Uploaded');
      })
      .catch(err => {
        // Error Handling
        console.error('Error Upload :', err);
      });
  };

  // console.log()
  return (
    <View style={{flex: 1, backgroundColor: '#114E60'}}>
      <HeaderEdit
        onPress={() => {
          handleUpdate();
          props.navigation.goBack();
        }}
      />
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
      <PassInput
        title="Password"
        BGcolor="#114E60"
        input={text => setPassword(text)}
        value={password}
      />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Button
          title="LOGOUT"
          onPress={async () => {
            dispatch({type: 'LOGOUT'});
            await removeToken();
            props.navigation.navigate('LoginStack', {screen: 'Login'});
          }}
        />
      </View>
    </View>
  );
};

export default EditProfilePage;
