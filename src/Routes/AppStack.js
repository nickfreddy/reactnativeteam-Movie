import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MainNavigator from './MainNavigator'
import SplashScreen from 'react-native-splash-screen'
import {useDispatch} from 'react-redux'

const Stack = createStackNavigator()

const AppStack = () => {
    const dispatch = useDispatch()

    useEffect( async() => {
        dispatch({type: 'GET_DATA'})
        setTimeout(() => {
            SplashScreen.hide();
        }, 3000);
    },[])

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Main Nav" component={MainNavigator} />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
