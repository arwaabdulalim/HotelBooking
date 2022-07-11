import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../config/themes/colors';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = ({navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Feather
          name="award"
          size={26}
          color={colors.grey}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text style={styles.headerText}>Good Morning, {'\n'} Stephanie!</Text>
      </View>
    </>
  );
};

const Home = ({navigation}) => {
  const [listType, setListType] = useState('recommend');
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces();
  }, []);

  const getPlaces = () => {
    return fetch(
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.52864165,-0.10179430&radius=500&type=restaurant&key=AIzaSyDORyCikRVSrqRH9Gj_kX4Ln4SOo8NZseU',
    )
      .then(response => response.json())
      .then(json => {
        setPlaces(json.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleRecommend = () => {
    setListType('recommend');
  };
  const handlePopular = () => {
    setListType('popular');
  };
  const handleTrending = () => {
    setListType('trending');
  };

  return (
    <SafeAreaView style={styles.Container}>
      <Header navigation={navigation} />
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleRecommend}>
          <Text
            style={[
              styles.categoryText,
              listType !== 'recommend' && styles.dimmedText,
            ]}>
            Recommended
          </Text>
          {listType === 'recommend' ? <View style={styles.pointer} /> : null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={handlePopular}>
          <Text
            style={[
              styles.categoryText,
              listType !== 'popular' && styles.dimmedText,
            ]}>
            Popular
          </Text>
          {listType === 'popular' ? <View style={styles.pointer} /> : null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleTrending}>
          <Text
            style={[
              styles.categoryText,
              listType !== 'trending' && styles.dimmedText,
            ]}>
            Trending
          </Text>
          {listType === 'trending' ? <View style={styles.pointer} /> : null}
        </TouchableOpacity>
      </View>
      {places.length > 0 ? (
        <FlatList
          data={places}
          keyExtractor={item => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {item})}>
              <ImageBackground
                source={{
                  uri: `https://maps.googleapis.com/maps/api/place/photo?maxheight=1000&photoreference=${item.photos?.[0]?.photo_reference}&key=AIzaSyDORyCikRVSrqRH9Gj_kX4Ln4SOo8NZseU`,
                }}
                resizeMode="cover"
                imageStyle={{borderRadius: 25}}
                style={styles.imageContainer}>
                <View style={styles.ratingWrapper}>
                  <AntDesign
                    name="star"
                    size={15}
                    color={colors.yellow}
                    style={styles.star}
                  />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.hotelName}>{item.name}</Text>
                  <Text style={styles.location}>{item.vicinity}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ActivityIndicator color={colors.primary} size="small" />
      )}
    </SafeAreaView>
  );
};

export default Home;
