import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../config/themes/colors';
import styles from './styles';

const ProfileTab = props => {
  const {iconName, iconColor, arrow, text, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.tabWrapper}>
      <View style={styles.buttonStyle}>
        <Feather
          name={iconName}
          size={26}
          color={iconColor}
          style={styles.icon}
        />
        <Text style={styles.tabTitle}>{text}</Text>
      </View>
      <MaterialIcons
        name={arrow}
        size={20}
        color={colors.primary}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default ProfileTab;
