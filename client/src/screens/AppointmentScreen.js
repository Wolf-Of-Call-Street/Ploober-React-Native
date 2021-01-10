import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
    <LinearGradient
      colors={['#2FA3F1', '#CBDBFC', 'white']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0, y: 1.0 }}
      locations={[0.0, 0.5, 1]}
    >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          accessible={false}
        >
          <View>
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
      </TouchableWithoutFeedback>

    </LinearGradient>
  )
};

const styles = StyleSheet.create({

  mainView: {
    height: '100%',
    display: 'flex',
    flex: 0,
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
    backgroundColor: '#CBDBFC',
    borderRadius: 25
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
