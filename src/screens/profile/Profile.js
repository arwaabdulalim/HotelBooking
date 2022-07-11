import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/themes/colors';
import styles from './styles';
import ProfileTab from '../../components/profileTab/ProfileTab';
import {useAuth} from '../../contexts/Auth';

const Profile = ({navigation}) => {
  const {handleLogout} = useAuth();

  const handleChangePhoto = () => {
    alert('handle change photo');
  };

  const handleUserSettings = () => {
    alert('handle user settings');
  };
  return (
    <SafeAreaView>
      <View style={{paddingTop: 20}}>
        <ImageBackground
          source={{uri: 'https://picsum.photos/200'}}
          resizeMode="cover"
          imageStyle={styles.profileStyle}
          style={styles.imageContainer}>
          <TouchableOpacity
            onPress={handleChangePhoto}
            style={styles.cameraWrapper}>
            <MaterialCommunityIcons
              name="camera-outline"
              size={24}
              color={colors.white}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.nameWrapper}>
        <Text style={styles.userName}>Daniel Bronks</Text>
        <Text style={styles.country}>Indonesia</Text>
      </View>
      <View style={styles.operationsWrapper}>
        <View style={styles.totalNumber}>
          <Text style={styles.numberText}>47</Text>
          <Text style={styles.operationType}>Reviews</Text>
        </View>
        <View style={styles.totalNumber}>
          <Text style={styles.numberText}>75</Text>
          <Text style={styles.operationType}>Transactions</Text>
        </View>
        <View style={styles.totalNumber}>
          <Text style={styles.numberText}>2</Text>
          <Text style={styles.operationType}>Bookings</Text>
        </View>
      </View>
      <Text style={styles.optionsText}>Options</Text>
      <ProfileTab
        iconName="award"
        iconColor={colors.grey}
        text="User Settings"
        arrow="arrow-forward-ios"
        onPress={handleUserSettings}
      />
      <ProfileTab
        iconName="log-out"
        iconColor={colors.grey}
        text="Logout"
        onPress={handleLogout}
      />
      <ProfileTab
        iconName="check-circle"
        iconColor={colors.primary}
        text="Bookings"
        arrow="arrow-forward-ios"
        onPress={() => navigation.navigate('HotelBookings')}
      />
    </SafeAreaView>
  );
};

export default Profile;
