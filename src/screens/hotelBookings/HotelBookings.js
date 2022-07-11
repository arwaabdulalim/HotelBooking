import {ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/header/header';
import Rating from '../../components/rating/Rating';

const DUMMY_DATA = [
  {
    name: 'Tropicasa De Hotel',
    location: 'Amsterdam, Netherlands',
    reviews: 'from 22/1/2020 To 25/1/2020',
  },
  {
    name: 'Tropicasa De Hotel',
    location: 'Amsterdam, Netherlands',
    reviews: 'from 22/1/2020 To 25/1/2020',
  },
  {
    name: 'Tropicasa De Hotel',
    location: 'Amsterdam, Netherlands',
    reviews: 'from 22/1/2020 To 25/1/2020',
  },
  {
    name: 'Tropicasa De Hotel',
    location: 'Amsterdam, Netherlands',
    reviews: 'from 22/1/2020 To 25/1/2020',
  },
];
const HotelBookings = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Bookings" onPress={() => navigation.navigate('Profile')} />
      <ScrollView>
        {DUMMY_DATA.map(item => (
          <Rating
            name={item.name}
            location={item.location}
            reviews={item.reviews}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelBookings;
