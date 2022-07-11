import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useAuth} from '../../contexts/Auth';
import colors from '../../config/themes/colors';
import InputField from '../../components/inputField/inputField';
import MainButton from '../../components/button/MainButton';
import Logo from '../../components/headerLogo/Logo';

const Login = ({navigation}) => {
  const {handleLogin, handleSignup} = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userEmail, setUserEmail] = useState();

  const handleForgetPassword = () => {
    alert('handle forget password');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <View style={styles.switcherContainer}>
        <TouchableOpacity
          onPress={() => setIsSignUp(false)}
          style={[
            styles.buttonContaier,
            {
              borderBottomWidth: !isSignUp ? 3 : 0,
            },
          ]}>
          <Text
            style={[
              styles.loginText,
              {color: !isSignUp ? colors.dark : colors.grey},
            ]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsSignUp(true)}
          style={[
            styles.buttonContaier,
            {
              borderBottomWidth: isSignUp ? 3 : 0,
            },
          ]}>
          <Text
            style={[
              styles.loginText,
              {color: isSignUp ? colors.dark : colors.grey},
            ]}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
      {!isSignUp ? (
        <>
          <InputField
            placeholder="username"
            placeholderTextColor={colors.grey}
            labelName="Username or E-mail"
            onChangeText={setUserName}
            value={userName}
          />
          <InputField
            icon="eye-off-outline"
            type="Password"
            placeholder="password"
            labelName="Password"
            onChangeText={setUserPassword}
            value={userPassword}
            placeholderTextColor={colors.grey}
          />
          <TouchableOpacity onPress={handleForgetPassword}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
          <MainButton
            title="Login"
            style={styles.button}
            onPress={() => handleLogin({userName, userPassword})}
          />
        </>
      ) : (
        <>
          <InputField
            placeholder="Create your username"
            placeholderTextColor={colors.grey}
            labelName="Username"
            onChangeText={setUserName}
            value={userName}
          />
          <InputField
            placeholder="Enter your e-mail"
            placeholderTextColor={colors.grey}
            labelName="Email"
            onChangeText={setUserEmail}
            value={userEmail}
            type="email"
          />
          <InputField
            icon="eye-off-outline"
            placeholder="Create your password"
            labelName="Password"
            type="Password"
            onChangeText={setUserPassword}
            value={userPassword}
            placeholderTextColor={colors.grey}
          />
          <MainButton
            title="Sign Up"
            style={styles.button}
            onPress={() => handleSignup({userName, userEmail, userPassword})}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Login;
