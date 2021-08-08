import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/Button';
import PassInput from '../components/PassInput';
import TxtInput from '../components/TxtInput';

const RegisterScreen = props => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(state => state.auth.isLoading);
  // console.log('err dari register', errMessage)
  const handleRegister = () => {
    let newData = {
      username,
      email,
      password,
    };
    dispatch({type: 'REGISTER', dataReg: newData});
  };

  return (
    <View style={styles.backgroundBase}>
      <Image source={require('../assets/LogoBlue.jpg')} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.containerInput}>
          <TxtInput
            title="Username"
            input={text => setUsername(text)}
            value={username}
            BGcolor="#325288"
          />
          <TxtInput
            title="Email"
            input={text => setEmail(text)}
            value={email}
            BGcolor="#325288"
          />
          <PassInput
            title="Password"
            input={text => setPassword(text)}
            value={password}
            BGcolor="#325288"
          />
        </View>
        {!loading ? (
          <Button title="Login" onPress={() => handleRegister()} />
        ) : (
          <ActivityIndicator color="orange" size="large" />
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>Already have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={{color: 'yellow'}}> Sign In!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const heightScreen = Dimensions.get('screen').height;
const widthScreen = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  backgroundBase: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#325288',
  },
  contentContainer: {
    width: widthScreen - 0.2 * widthScreen,
    height: heightScreen - 0.5 * heightScreen,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerInput: {
    width: widthScreen - 0.2 * widthScreen,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
