import {
  View,
  Text,
  Modal,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Calendar} from 'react-native-calendars';
import colors from '../../config/themes/colors';
import MainButton from '../../components/button/MainButton';
import Transactions from '../../screens/transaction/Transactions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import dayjs from 'dayjs';

const Booking = ({navigation, route}) => {
  const [bookedDates, setBookedDates] = useState({});
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const {image} = route?.params;

  const handleAddToFav = () => {
    alert('handle add to fav');
  };

  const handleChangeDate = day => {
    let keyName = day.dateString;
    if (checkinDate === '') {
      let newObj = {};
      setCheckinDate(keyName);
      newObj[keyName] = {
        startingDay: true,
        color: colors.primary,
        textColor: 'white',
      };
      setBookedDates(newObj);
      return;
    }
    if (checkoutDate === '') {
      setCheckoutDate(keyName);
      let newObj = {...bookedDates};
      newObj[keyName] = {
        endingDay: true,
        color: colors.primary,
        textColor: 'white',
      };
      setBookedDates(newObj);
      return;
    }
  };

  const handleSubmit = () => {
    if (checkinDate === '' || checkoutDate === '') {
      Alert.alert('select dates first');
    } else {
      // submit booking logic
      setModalVisible(!modalVisible);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(!modalVisible);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: image}}
        style={{width: '100%', height: 200}}>
        <View style={styles.headerStyle}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerButtonStyles}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={35}
              color={colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleAddToFav}
            style={styles.headerButtonStyles}>
            <FontistoIcons name="favorite" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {bookedDates && (
        <Calendar
          markingType={'period'}
          markedDates={bookedDates}
          onDayPress={handleChangeDate}
        />
      )}

      <View style={styles.checkContainer}>
        <View style={styles.checkWrapper}>
          <Text style={styles.checkText}>Check In</Text>

          <Text style={styles.checkText}>Check Out</Text>
        </View>
        <View style={styles.checkWrapper}>
          <Text style={styles.checkDate}>
            {checkinDate && dayjs(checkinDate).format('MMMM D')}
          </Text>
          <Text style={styles.checkDate}>
            {checkoutDate && dayjs(checkoutDate).format('MMMM D')}
          </Text>
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={35}
          color={colors.grey}
          style={styles.arrow}
        />
      </View>
      <MainButton title="Continue" onPress={handleSubmit} />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Transactions onPress={handleCloseModal} />
      </Modal>
    </View>
  );
};

export default Booking;
