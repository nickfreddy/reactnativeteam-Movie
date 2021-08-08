import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TxtInput from '../components/TxtInput';
import Button from '../components/Button';
import PassInput from '../components/PassInput';
import {connect, useSelector} from 'react-redux';
import { color } from 'react-native-reanimated';

const LoginScreen = props => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(state => state.auth.isLoading)
  const message = useSelector(state => state.auth.loginMessage)
  // console.log(message)
  const handleLogin = () => {
    const newData = {
      email,
      password,
    };
    props.login(newData);
  };



  return (
    <View style={styles.backgroundBase}>
      <Image source={require('../assets/LogoBlue.jpg')} style={styles.image} />
      <View style={styles.contentContainer}>
        {(message !== null) ? <Text style={{color:'white'}}>Wrong email or password!</Text> : null}
        <View style={styles.containerInput}>
          <TxtInput
            placeholder="Username"
            title="Email"
            BGcolor="#325288"
            input={text => setEmail(text)}
            value={email}
          />
          <PassInput
            placeholder="Password"
            title="Password"
            BGcolor="#325288"
            input={text => setPassword(text)}
            value={password}
          />
        </View>
        {(!loading) 
        ? <Button title="Login" onPress={() => handleLogin()} />
        : <ActivityIndicator color='orange' size='large'/> 
        }
        
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Register')}>
            <Text style={{color: 'yellow'}}> SignUp!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const reduxState = state => ({
  verify: state.auth.isLoggedIn,
});

const reduxDispatch = dispatch => ({
  login: dataLogin => dispatch({type: 'LOGIN', data: dataLogin}),
});

export default connect(reduxState, reduxDispatch)(LoginScreen);

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
    paddingVertical: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerInput: {
    width: widthScreen - 0.15 * widthScreen,
  },
  image: {
    width: 150,
    height: 150,
  },
});
