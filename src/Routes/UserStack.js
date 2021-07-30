import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';
import UserReviewPage from '../Screens/UserReviewPage';
import EditProfile from '../components/EditProfile';

const Stack = createStackNavigator();

const UserStack = ({route, navigation}) => {
  useEffect(() => {
    let focusedStack = getFocusedRouteNameFromRoute(route);
    if (focusedStack === 'EditProfile') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserReview"
        component={UserReviewPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
