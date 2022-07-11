import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  profileImage: {
    width: 130,
    height: 130,
    top: 5,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: 100,
  },
  iconStyle: {
    alignSelf: 'center',
  },
  profileStyle: {borderRadius: 50},
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    paddingLeft: 70,
  },
  cameraWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.white,
  },
  cameraIcon: {
    bottom: 76,
    alignSelf: 'center',
    left: 30,
  },
  nameWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  userName: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
    color: colors.dark,
  },
  country: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: colors.grey,
  },
  operationsWrapper: {
    width: 325,
    height: 103,
    backgroundColor: colors.white,
    padding: 15,
    marginTop: 40,
    borderRadius: 10,
    borderBottomColor: '#b1b1b1',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  totalNumber: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 38,
    color: colors.primary,
  },
  operations: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  operationType: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 25,
    color: colors.grey,
  },
  optionsText: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    color: colors.dark,
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 25,
  },
});

export default styles;
