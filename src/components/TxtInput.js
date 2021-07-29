import React from 'react';
import {View, TextInput} from 'react-native';

const TxtInput = props => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'white',
          width: '80%',
          color: 'white',
        }}
        placeholder={props.placeholder}
        placeholderTextColor="silver"
      />
    </View>
  );
};

export default TxtInput;
