import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import MainButton from '../../components/button/MainButton';

const OnBoarding = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('../../assets/images/vector1.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.titleText}>Travel with no worry</Text>
        <Text style={styles.descriptionText}>
          You can now experience the next level travel experience for hotel
          bookings.
        </Text>
      </View>
      <MainButton
        style={styles.button}
        title="Next"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default OnBoarding;
