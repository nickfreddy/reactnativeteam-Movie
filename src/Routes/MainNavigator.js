import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AllRevPage from '../Screens/AllRevPage';
import HomeStack from './HomeStack';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserStack from './UserStack';

const Tab = createBottomTabNavigator();

const IconRoute = {
  AllReview: ['message', 'message-outline'],
  Home: ['home', 'home-outline'],
  UserReview: ['account-circle', 'account-circle-outline'],
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let icon;
          focused
            ? (icon = IconRoute[route.name][0])
            : (icon = IconRoute[route.name][1]);
          return <MaterialCommunityIcon name={icon} color={color} size={20} />;
        },
      })}>
      <Tab.Screen name="AllReview" component={AllRevPage} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="UserReview" component={UserStack} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
