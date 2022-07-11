import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screen,
  },
  buttonContaier: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomColor: colors.primary,
  },
  switcherContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  loginText: {
    fontFamily: 'Nunito Sans',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 27,
  },

  switchLog: {
    borderWidth: 1.3,
    width: '50%',
    borderColor: colors.primary,
    position: 'absolute',
    bottom: 61,
    left: -25,
  },
  switchSign: {
    borderWidth: 1.3,
    width: '50%',
    borderColor: colors.primary,
    position: 'absolute',
    bottom: 61,
    right: -25,
  },
  userTextWrapper: {
    marginBottom: 20,
    marginLeft: 25,
  },
  userText: {
    fontFamily: 'Nunito Sans',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: colors.dark,
  },
  forgotPassText: {
    fontFamily: 'Nunito Sans',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 25,
    color: colors.medium,
    alignSelf: 'flex-end',
    marginRight: 25,
  },
  button: {
    width: 325,
    height: 57,
    borderRadius: 28.5,
    marginTop: 50,
  },
});
export default styles;
