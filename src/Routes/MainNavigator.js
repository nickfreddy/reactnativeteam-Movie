import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AllRevPage from '../Screens/AllRevPage';
import HomeStack from './HomeStack';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserStack from './UserStack';
import {Image} from 'react-native';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const IconRoute = {
  AllReview: ['message', 'message-outline'],
  Home: ['home', 'home-outline'],
};

const MainNavigator = () => {
  const userPhoto = useSelector(state => state.User.userData.photo)

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
      })}
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen name="AllReview" component={AllRevPage} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen
        name="UserReview"
        component={UserStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: 'black',
              }}
              source={{uri: userPhoto}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
