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
    <View style={styles.mainView}>
      <PlumberInfo styles={styles}/>
      <Issue
      issue={issue}
      setIssue={setIssue}
      styles={styles}/>
      <CalendarModule
      dateTime={dateTime}
      setDateTime={setDateTime}
      styles={styles}/>
      <Confirm
      navigation={navigation}
      setAppointmentInfo={setAppointmentInfo}
      issue={issue}
      dateTime={dateTime}/>
    </View>
  )
};

const styles = StyleSheet.create({

  mainView: {
    backgroundColor: '#CBDBFC',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  businessName: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#374DD5'
  },

  genericText: {
    fontSize: 20,
    textAlign: 'center'
  },

  issueInput: {

  },

  issueText: {
    fontSize: 15
  },

  issueView: {
    // paddingVertical: '10px'
  },

  caldendarButton: {

  }
});

export default AppointmentScreen;