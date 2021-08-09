import React from 'react';
import {View, TextInput, Text} from 'react-native';

const DesInput = props => {
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
          textAlignVertical: 'top',
        }}
        onChangeText={props.input}
        value={props.value}
        numberOfLines={5}
      />
      <Text
        style={{
          position: 'absolute',
          bottom: 99,
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

export default DesInput;
