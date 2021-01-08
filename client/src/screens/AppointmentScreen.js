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
  const [dateTime, setDateTime] = useState(0);
  const { state, setAppointmentInfo } = useContext(AppointmentContext);

  return (
    <View>
      {/* {console.log(state.businessInfo)} */}
      <PlumberInfo />
      <Issue issue={issue} setIssue={setIssue}/>
      <CalendarModule dateTime={dateTime} setDateTime={setDateTime}/>
      <Confirm navigation={navigation} setAppointmentInfo={setAppointmentInfo} issue={issue} dateTime={dateTime}/>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default AppointmentScreen;