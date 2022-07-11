import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home/Home';
import Details from '../../screens/hotelDetails/Details';
import Profile from '../../screens/profile/Profile';
import Booking from '../../screens/Booking/Booking';
import Transactions from '../../screens/transaction/Transactions';
import HotelBookings from '../../screens/hotelBookings/HotelBookings';
const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerShown: false}}
      name={'Home'}
      component={Home}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name={'Details'}
      component={Details}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name={'Booking'}
      component={Booking}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name={'Transactions'}
      component={Transactions}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name={'Profile'}
      component={Profile}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name={'HotelBookings'}
      component={HotelBookings}
    />
  </Stack.Navigator>
);

export default MainStack;
