import {View, Text, Image, Modal} from 'react-native';
import React, {useState} from 'react';
import MainButton from '../../components/button/MainButton';
import styles from './styles';

const Transactions = ({onPress}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <View style={styles.modalWrapper}>
        <Image
          source={require('../../assets/images/stroke.png')}
          resizeMode="contain"
          style={styles.checkCircle}
        />
        <Image
          source={require('../../assets/images/check.png')}
          resizeMode="contain"
          style={styles.checkMark}
        />
        <View style={styles.detailsWrapper}>
          <Text style={styles.transStatus}>Transaction Success</Text>
          <Text style={styles.transDetails}>
            Congratulations! You can see your bookings in the booking section.
            Enjoy your trip!
          </Text>
        </View>
        <MainButton title="Continue" onPress={onPress} style={styles.button} />
      </View>
    </View>
  );
};

export default Transactions;
