import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  headerWrapper: {flexDirection: 'row', marginLeft: 27, marginTop: 67},
  descText: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27,
    marginLeft: 22,
    marginBottom: 30,
    color: colors.dark,
  },
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
    width: 200,
    height: 200,
    left: 15,
    alignSelf: 'center',
  },
  ratingTextView: {
    lineHeight: 25,
    marginRight: 53,
    height: 100,
    right: 15,
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
  description: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 25,
    marginBottom: 40,
    marginHorizontal: 25,
    color: colors.grey,
  },
  button: {
    width: 165,
    height: 57,
    borderRadius: 28.5,
  },
});
export default styles;
