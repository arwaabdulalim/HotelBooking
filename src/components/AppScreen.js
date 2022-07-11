import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
} from 'react-native';
import React from 'react';
import colors from '../config/themes/colors';

const AppScreen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screen,
  },
  view: {
    flex: 1,
  },
});
