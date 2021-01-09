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
      style={styles.confirmButton}
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
    flex: 0,
    // flexDirection: 'column',
    justifyContent: 'space-between'
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
    backgroundColor: 'rgba(55, 77, 213, 0.2)',
    height: 'auto',
    width: '80%',
    minHeight: '35%',
    alignSelf: 'center',
    textAlign: 'justify',
    borderColor: '#374DD5',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 25
  },

  issueText: {
    alignSelf: 'center',
    fontSize: 15
  },

  issueView: {
    // paddingVertical: '10px'
  },

  calendarButton: {
    width: '80%',
    alignSelf: 'center',
    color: '#374DD5',
    borderRadius: 50
  },

  confirmButton: {
    bottom: 0
  }
});

export default AppointmentScreen;
