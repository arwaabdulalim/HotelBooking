import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  tabWrapper: {
    width: 325,
    height: 70,
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    paddingRight: 20,
  },
  buttonStyle: {flexDirection: 'row', paddingLeft: 20},
  tabTitle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: colors.dark,
    paddingLeft: 10,
  },
  icon: {
    // paddingHorizontal: 27,
  },
});

export default styles;
