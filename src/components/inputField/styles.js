import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: 'row',
    marginLeft: 25,
    marginVertical: 10,
    width: '90%',
    height: 55,
  },
  icon: {
    left: 320,
    bottom: 50,
  },
  text: {
    color: colors.dark,
    fontSize: 18,
    paddingLeft: 20,
    width: '100%',
  },
});

export default styles;
