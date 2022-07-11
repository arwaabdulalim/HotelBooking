import {View, Text, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../config/themes/colors';
import styles from './styles';

const Rating = props => {
  const {name, location, reviews, image, iconName, rating} = props;

  return (
    <View style={styles.ratingWrapper}>
      <Image
        source={{uri: image || 'https://picsum.photos/200'}}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.ratingTextView}>
        <Text style={styles.detailsText}>{name}</Text>
        <Text style={styles.locationText}>{location.substring(0, 30)}</Text>
        <View style={styles.ratingView}>
          {rating && (
            <>
              <AntDesign
                name={iconName}
                size={15}
                color={colors.yellow}
                style={styles.star}
              />
              <Text style={styles.rating}>{rating}</Text>
            </>
          )}
          <Text style={styles.locationText}>{reviews}</Text>
        </View>
      </View>
    </View>
  );
};

export default Rating;
