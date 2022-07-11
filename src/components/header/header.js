import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import colors from '../../config/themes/colors';

const Header = props => {
  const {title, onPress} = props;
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={35}
          color={colors.dark}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.descText}>{title}</Text>
    </View>
  );
};

export default Header;
