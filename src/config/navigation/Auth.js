import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../../screens/onBoarding/OnBoarding';
import Login from '../../screens/login/Login';
import SignUp from '../../screens/signUp/SignUp';
const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerShown: false}}
      name={'OnBoarding'}
      component={OnBoarding}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name={'Login'}
      component={Login}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name={'Sign Up'}
      component={SignUp}
    />
  </Stack.Navigator>
);

export default AuthStack;
