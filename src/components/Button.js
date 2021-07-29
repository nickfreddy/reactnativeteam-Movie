import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 100,
          width: 124,
          alignItems: 'center',
          justifyContent: 'center',
          height: 45,
          backgroundColor: 'white',
        }}>
        <Text style={{color: '#325288', fontWeight: 'bold', fontSize: 16}}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
