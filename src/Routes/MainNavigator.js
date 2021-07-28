import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../Screens/HomePage'
import UserReviewPage from '../Screens/UserReviewPage'
import ProfilePage from '../Screens/ProfilePage'
import HomeStack from './HomeStack'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='UserReview' component={UserReviewPage} />
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name='Profile' component={ProfilePage} />
        </Tab.Navigator>
    )
}

export default MainNavigator
