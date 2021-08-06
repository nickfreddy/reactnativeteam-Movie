import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from './MainNavigator';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch} from 'react-redux';
import LoginStack from './LoginStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {getToken} from '../components/loginFunct';

const Stack = createStackNavigator();

const AppStack = props => {
  const [token, setToken] = useState(null);

  const dispatch = useDispatch();

  useEffect(async () => {
    const token = await getToken();
    if (token) {
      setToken(token);
    }
    dispatch({type: 'GET_DATA'});
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    await getToken();
  }, []);

  return (
    <Stack.Navigator headerMode="none">
      {props.verify || token ? (
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
      ) : (
        <Stack.Screen name="LoginStack" component={LoginStack} />
      )}
    </Stack.Navigator>
  );
};

const reduxState = state => ({
  verify: state.auth.isLoggedIn,
});

const reduxDispatch = dispatch => ({
  checkToken: () => dispatch({type: 'VERIFY_TOKEN'}),
});

export default connect(reduxState, reduxDispatch)(AppStack);

const styles = StyleSheet.create({});
