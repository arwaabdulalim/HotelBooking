import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import colors from '../../config/themes/colors';

const InputField = ({icon, width, type, labelName, ...otherProps}) => {
  const [isSecure, setIsSecure] = useState(type === 'Password');
  return (
    <View>
      <View style={{marginVertical: 20, marginLeft: 25}}>
        <Text
          style={{
            fontFamily: 'Nunito Sans',
            fontSize: 16,
            fontWeight: '600',
            color: colors.dark,
          }}>
          {labelName}
        </Text>
      </View>
      <View style={[styles.container]}>
        <TextInput
          placeholderTextColor={colors.medium}
          style={styles.text}
          {...otherProps}
          secureTextEntry={isSecure}
        />
      </View>
      {type === 'Password' && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          <MaterialCommunityIcons
            name={icon}
            size={30}
            color={colors.grey}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default InputField;
