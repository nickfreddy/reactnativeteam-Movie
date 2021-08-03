import React from 'react';
import {View, Text, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TxtInput from '../components/TxtInput';
import PassInput from '../components/PassInput';
import ProfilePic from '../components/ProfilePic';
import Button from '../components/Button';
import HeaderEdit from '../components/HeaderEdit';

const EditProfilePage = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#114E60'}}>
      <HeaderEdit />
      <View style={{top: 30, marginBottom: 30}}>
        <ProfilePic />
        <View style={{left: 230, bottom: 20}}>
          <AntDesign name="edit" size={25} color="gold" />
        </View>
      </View>
      <TxtInput title="Full Name" BGcolor="#114E60" />
      <TxtInput title="Nickname" BGcolor="#114E60" />
      <TxtInput title="Email" BGcolor="#114E60" />
      <PassInput title="Password" BGcolor="#114E60" />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Button
          title="LOGOUT"
          onPress={() => props.navigation.navigate('LoginStack')}
        />
      </View>
    </View>
  );
};

export default EditProfilePage;
