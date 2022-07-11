import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    marginLeft: 27,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 30,
  },
  descText: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27,
    marginLeft: 20,
    color: colors.dark,
  },
});
export default styles;
