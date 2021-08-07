import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TxtInput from '../components/TxtInput';
import PassInput from '../components/PassInput';
import ProfilePic from '../components/ProfilePic';
import Button from '../components/Button';

const ProfilePage = props => {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // handleUpdateData = () => {
  //   newUpdateData={
  //     username,
  //     email,
  //     password,
  //     photo,
  //   }
  // }
  return (
    <View style={{flex: 1, backgroundColor: '#114E60'}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#325288',
          height: 62,
          alignItems: 'center',
          marginLeft: 5,
        }}>
        <AntDesign name="close" size={23} color="white" />
        <Text style={{fontSize: 25, color: 'white', marginLeft: 10}}>
          Edit Profile
        </Text>
        <View style={{position: 'absolute', left: 360}}>
          <AntDesign name="check" size={23} color="white" />
        </View>
      </View>
      <View style={{top: 30, marginBottom: 30}}>
        <ProfilePic />
        <View style={{left: 230, bottom: 20}}>
          <AntDesign name="edit" size={25} color="gold" />
        </View>
      </View>
      <TxtInput
        placeholder="Username"
        input={text => setUsername(text)}
        value={username}
      />
      <TxtInput
        placeholder="Email"
        input={text => setEmail(text)}
        value={email}
      />
      <PassInput input={text => setEmail(text)} value={password} />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Button title="LOGOUT" />
      </View>
    </View>
  );
};

export default ProfilePage;
