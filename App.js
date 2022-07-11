import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import 'react-native-gesture-handler';
import Router from './src/config/navigation/Router';
import {AuthProvider} from './src/contexts/Auth';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    Platform.OS === 'ios' && RNBootSplash.hide({fade: true});
  }, []);
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
