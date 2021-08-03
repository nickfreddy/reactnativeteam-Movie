import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

const ProfilePic = () => {
  const [image, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  );

  const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  }

  const handleUpload = () => {
      launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
         let source = response.assets[0]
         console.log('response source =', source)
         setImage(source.uri)
      }
    });
  };
// on develop do not remove
  // useEffect(() => {
  //   console.log(image)
  // }, [image])
  // const ChooseFromGallery = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     console.log(image);
  //     setImage(image.path);
  //   });
  // };
  console.log('hai')
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={handleUpload}>
        <ImageBackground
          source={{uri: image}}
          style={{height: 110, width: 110}}
          imageStyle={{borderRadius: 1000}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePic;
