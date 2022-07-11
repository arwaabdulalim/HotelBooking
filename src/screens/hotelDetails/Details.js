import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import MainButton from '../../components/button/MainButton';
import Header from '../../components/header/header';
import Rating from '../../components/rating/Rating';

const Details = ({navigation, route}) => {
  const {item} = route?.params;
  const DUMMY_DESC =
    'Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you.';
  const placeImagee = `https://maps.googleapis.com/maps/api/place/photo?maxheight=1000&photoreference=${item.photos?.[0]?.photo_reference}&key=AIzaSyDORyCikRVSrqRH9Gj_kX4Ln4SOo8NZseU`;
  return (
    <SafeAreaView>
      <Header title="Description" onPress={() => navigation.navigate('Home')} />
      <Rating
        name={item.name}
        location={item.vicinity}
        rating={item.rating}
        image={placeImagee}
        reviews="(1763 Reviews)"
        iconName="star"
      />
      <Text style={styles.description}>{DUMMY_DESC}</Text>
      <MainButton
        title="Book"
        style={styles.button}
        onPress={() =>
          navigation.navigate('Booking', {
            image: placeImagee,
          })
        }
      />
    </SafeAreaView>
  );
};

export default Details;
