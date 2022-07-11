import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const MainButton = ({title, onPress, handleSubmit, style, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, {...style}]} onPress={onPress}>
      <Text style={[styles.text, {...textStyle}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
