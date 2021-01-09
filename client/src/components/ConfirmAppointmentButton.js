import React from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-elements';

const Confirm = ({navigation, setAppointmentInfo, issue, dateTime}) => {
  return (
    <View>
      <Button
        title="Go to Payment"
        onPress={() => {
          setAppointmentInfo(dateTime, issue)
          navigation.navigate('Confirmation');
        }}
      />
    </View>
  )
};

export default Confirm;