import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  ratingWrapper: {
    width: 325,
    height: 125,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 35,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 10,
  },
  ratingTextView: {
    marginLeft: 20,
  },
  detailsText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24.5,
    marginBottom: 10,
  },
  locationText: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.grey,
    marginBottom: 10,
  },
  ratingView: {
    flexDirection: 'row',
  },
  rating: {
    fontWeight: '600',
    fontSize: 15,
    color: colors.yellow,
    marginRight: 9,
  },

  star: {
    bottom: -2,
    marginRight: 12,
  },
});
export default styles;
