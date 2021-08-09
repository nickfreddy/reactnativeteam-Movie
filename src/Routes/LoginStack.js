import React from 'react'
import { StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'

const Stack = createStackNavigator()

const LoginStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default LoginStack

const styles = StyleSheet.create({})
