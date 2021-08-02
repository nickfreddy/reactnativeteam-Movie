import React from 'react';
import {View, TextInput, Text} from 'react-native';

const TxtInput = props => {
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
      />
      <Text
        style={{
          position: 'absolute',
          bottom: 42,
          left: 60,
          color: 'white',
          backgroundColor: props.BGcolor,
          borderWidth: 1,
          borderColor: '#114E60',
          paddingLeft: 5,
          paddingRight: 5,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default TxtInput;
