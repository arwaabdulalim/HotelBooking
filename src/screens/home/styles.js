import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  icon: {
    marginTop: 40,
    paddingRight: 37,
    alignSelf: 'flex-end',
  },
  textWrapper: {marginTop: 37, marginLeft: 25},
  headerText: {
    fontFamily: 'Nunito Sans',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 40,
    color: colors.dark,
  },
  Container: {flex: 1, backgroundColor: colors.white},
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 55,
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryText: {fontWeight: '700', fontSize: 18, lineHeight: 24.5},
  pointer: {
    width: 8,
    height: 8,
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  dimmedText: {
    fontWeight: '500',
    color: colors.grey,
  },
  hotelsContainer: {},
  ratingWrapper: {
    flexDirection: 'row',
    width: 74,
    height: 36,
    borderRadius: 20.5,
    alignSelf: 'flex-end',
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80%',
  },
  imageContainer: {
    width: 256,
    height: 424,
    marginLeft: 25,
    justifyContent: 'space-between',
    padding: 20,
  },
  star: {
    paddingRight: 10,
  },
  ratingText: {
    color: colors.white,
  },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hotelName: {
    fontFamily: 'Nunito Sans',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27.3,
    color: colors.white,
  },
  location: {
    fontFamily: 'Nunito Sans',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 25,
    color: colors.white,
  },
});

export default styles;
