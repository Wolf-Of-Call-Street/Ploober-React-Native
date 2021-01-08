import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
// import Name from '../components/PlumberName.js';
import PlumberInfo from '../components/PlumberInfo.js';
import Issue from '../components/Issue.js';
import CalendarModule from '../components/Calendar.js';
import Confirm from '../components/ConfirmAppointmentButton.js'
import { Context as AppointmentContext } from '../context/AppointmentContext';

const AppointmentScreen = ({navigation}) => {

  const [issue, setIssue] = useState('');
  const { state } = useContext(AppointmentContext);

  return (
    <View>
      {/* {console.log(state.businessInfo)} */}
      <PlumberInfo />
      <Issue />
      <CalendarModule />
      <Confirm navigation={navigation}/>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default AppointmentScreen;