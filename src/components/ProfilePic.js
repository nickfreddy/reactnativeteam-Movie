import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const ProfilePic = () => {
  const [image, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  );
  const ChooseFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={ChooseFromGallery}>
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
