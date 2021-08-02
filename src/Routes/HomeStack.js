import React, {useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/core'

import HomePage from '../Screens/HomePage'
import HomePage_Details from '../Screens/HomePage_Details'

const Stack = createStackNavigator()

const HomeStack = ({route, navigation}) => {
    useEffect(() => {
        let focusedStack = getFocusedRouteNameFromRoute(route);
        if (focusedStack === 'MovieDetails') {
          navigation.setOptions({tabBarVisible: false});
        } else {
          navigation.setOptions({tabBarVisible: true});
        }
      }, [route]);

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomePage} options={{headerShown:false}}/>
            <Stack.Screen name='MovieDetails' component={HomePage_Details} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default HomeStack

