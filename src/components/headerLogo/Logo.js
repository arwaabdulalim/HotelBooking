import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
const Logo = () => {
  return (
    <View>
      <View style={styles.logoWrapper}>
        <Image
          source={require('../../assets/images/vector.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.innerLogoWrapper}>
          <Image
            source={require('../../assets/images/vectorh.png')}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/images/dot.png')}
            resizeMode="contain"
            style={styles.logoDot}
          />
        </View>
      </View>
    </View>
  );
};

export default Logo;
