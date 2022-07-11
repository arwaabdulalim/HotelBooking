import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  modalWrapper: {
    width: 390,
    height: 450,
    backgroundColor: colors.white,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -10,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    paddingTop: 30,
  },
  checkCircle: {
    alignSelf: 'center',
  },
  checkMark: {
    alignSelf: 'center',
    bottom: 70,
    left: 10,
  },
  detailsWrapper: {
    width: 375,
    marginTop: 40,
    marginBottom: 40,
    alignSelf: 'center',
  },
  transStatus: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
    color: colors.dark,
    paddingLeft: 20,
  },
  transDetails: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    color: colors.grey,
    paddingLeft: 20,
  },
  button: {
    width: 325,
    height: 57,
    borderRadius: 28.5,
    marginTop: 40,
  },
});
export default styles;
