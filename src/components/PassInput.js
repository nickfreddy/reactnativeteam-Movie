import React from 'react';
import {View, TextInput, Text} from 'react-native';

const PassInput = props => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 12,
          borderColor: 'white',
          width: '80%',
          color: 'white',
          paddingLeft: 10,
        }}
        underlineColorAndroid="transparent"
        secureTextEntry={true}
        onChangeText={props.input}
        value={props.value}
      />
      <Text
        style={{
          position: 'absolute',
          bottom: 42,
          left: 50,
          color: 'white',
          backgroundColor: props.BGcolor,
          paddingLeft: 5,
          paddingRight: 5,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default PassInput;
