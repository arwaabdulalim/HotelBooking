import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home/Home';
import OnBoarding from '../../screens/onBoarding/OnBoarding';
import Details from '../../screens/hotelDetails/Details';
import Profile from '../../screens/profile/Profile';
import Login from '../../screens/login/Login';
import SignUp from '../../screens/signUp/SignUp';
import Booking from '../../screens/Booking/Booking';
import Transactions from '../../screens/transaction/Transactions';
import HotelBookings from '../../screens/hotelBookings/HotelBookings';
import AuthStack from './Auth';
import MainStack from './Main';
import {useAuth} from '../../contexts/Auth';
const Stack = createStackNavigator();

const Router = props => {
  const {isLogged} = useAuth();
  return (
    <NavigationContainer>
      {isLogged ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
