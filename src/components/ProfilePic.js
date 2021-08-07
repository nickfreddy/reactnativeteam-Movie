import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ProfilePic = props => {
  const [image, setImage] = useState(props.image);
  //const [rawImage, setRawImage] = useState();

  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
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
  //console.log('hai');
  useEffect(() => {
    setImage(props.image);
  }, [props.image]);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
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
