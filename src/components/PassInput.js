import React from 'react';
import {View, TextInput} from 'react-native';

const PassInput = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'white',
          width: '80%',
          color: 'white',
        }}
        placeholder="Password"
        placeholderTextColor="silver"
        underlineColorAndroid="transparent"
        secureTextEntry={true}
      />
    </View>
  );
};

export default PassInput;
