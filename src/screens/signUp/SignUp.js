import {View, Text} from 'react-native';
import React from 'react';
import Logo from '../../components/headerLogo/Logo';
import styles from './styles';
import InputField from '../../components/inputField/inputField';
import colors from '../../config/themes/colors';
import MainButton from '../../components/button/MainButton';

const SignUp = () => {
  return (
    <View>
      <Logo />
      <View style={styles.userTextWrapper}>
        <Text style={styles.userText}>Username</Text>
      </View>
      <InputField
        placeholder="Create your username"
        placeholderTextColor={colors.grey}
      />
      <View style={styles.userTextWrapper}>
        <Text style={styles.userText}>Email</Text>
      </View>
      <InputField
        placeholder="Enter your e-mail"
        placeholderTextColor={colors.grey}
      />
      <View style={styles.userTextWrapper}>
        <Text style={styles.userText}>Password</Text>
      </View>
      <InputField
        icon="eye-off-outline"
        placeholder="Create your password"
        placeholderTextColor={colors.dark}
      />
      <MainButton title="Sign Up" />
    </View>
  );
};

export default SignUp;
