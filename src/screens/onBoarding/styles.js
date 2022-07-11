import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  image: {
    width: 326,
    height: 402,
    top: 61,
  },
  textWrapper: {
    marginTop: 120,
    marginBottom: 66,
    marginHorizontal: 25,
  },
  titleText: {
    fontFamily: 'Nunito Sans',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32.8,
    marginBottom: 20,
  },
  descriptionText: {
    fontFamily: 'Nunito Sans',
    fontSize: 16,
    lineHeight: 28,
    color: colors.medium,
  },
  button: {
    width: 165,
    height: 57,
    borderRadius: 28.5,
  },
});

export default styles;
