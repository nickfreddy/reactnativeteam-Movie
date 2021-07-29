import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../Screens/SplashScreen';

const Stack = createStackNavigator();

const SplashStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={SplashScreen} />
        </Stack.Navigator>
    )
}

export default SplashStack
