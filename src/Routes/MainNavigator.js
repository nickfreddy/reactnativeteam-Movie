import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import UserReviewPage from '../Screens/UserReviewPage'
import ProfilePage from '../Screens/ProfilePage'
import HomeStack from './HomeStack'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

const IconRoute = {
    UserReview : ['message','message-outline'],
    Home: ['home', 'home-outline'],
    Profile : ['account-circle', 'account-circle-outline'],
}

const MainNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Home' shifting={true} screenOptions= {({route}) => ({
            tabBarIcon: ({focused, color}) => {
                let icon;
                focused ? icon = IconRoute[route.name][0] : icon = IconRoute[route.name][1]
                return <MaterialCommunityIcon name={icon} color={color} size={20} />
            }
        })}>
            <Tab.Screen name='UserReview' component={UserReviewPage} />
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name='Profile' component={ProfilePage} />
        </Tab.Navigator>
    )
}

export default MainNavigator
