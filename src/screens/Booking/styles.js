import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justfyContent: 'center',
    backgroundColor: colors.white,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  headerButtonStyles: {
    width: 50,
    height: 50,
    backgroundColor: colors.dark,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  checkContainer: {
    width: 350,
    height: 100,
    backgroundColor: colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 45,
    marginBottom: 60,
  },
  checkWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 39,
  },
  arrowIcon: {
    top: 25,
  },
  checkText: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24.5,
    color: colors.grey,
    marginBottom: 10,
  },
  checkDate: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 33,
    color: colors.dark,
  },
  arrow: {position: 'absolute', top: 55, alignSelf: 'center'},
});
export default styles;
