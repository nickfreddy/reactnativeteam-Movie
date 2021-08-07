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

const EditProfilePage = props => {
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
        //console.log(source);
      }
    });
  };

  const handleUpdate = () => {
    const newUpdateData = {
      username,
      email,
      password,
      photo: 'https://placeimg.com/640/480/any',
    };
    dispatch({type: 'GET_UPDATE', dataUpdate: newUpdateData});
  };

  // const uploadImage = async () => {
  //   const data = new FormData(); // Make Multipart Form-Data body
  //   data.append('file', rawImage); // Insert data / image to the data body
  //   await axios({
  //     method: 'POST',
  //     url: `https://backend.com/upload`, // link to upload image from your Backend
  //     data: data,
  //     headers: {
  //       'Content-Type': 'multipart/form-data', // Specify to make the content sent is form-data type
  //     },
  //   })
  //     .then(res => {
  //       // Success Handling
  //       console.log(res.data);
  //       console.log('Image Uploaded');
  //     })
  //     .catch(err => {
  //       // Error Handling
  //       console.error('Error Upload :', JSON.stringify(err));
  //     });
  // };

  // console.log()
  return (
    <View style={{flex: 1, backgroundColor: '#114E60'}}>
      <HeaderEdit onPress={() => handleUpdate()} />
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
