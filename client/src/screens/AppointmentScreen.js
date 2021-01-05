import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
// import Name from '../components/PlumberName.js';
import PlumberInfo from '../components/PlumberInfo.js';
import Issue from '../components/Issue.js';
import Calender from '../components/Calender.js';
import Confirm from '../components/ConfirmAppointmentButton.js'

const AppointmentScreen = () => {
  return (
    <View>
      <PlumberInfo />
      <Issue />
      <Calender />
      <Confirm />
    </View>
  )
};

const styles = StyleSheet.create({

});

export default AppointmentScreen;