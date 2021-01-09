import React, {useState, useContext} from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const Issue = ({issue, setIssue}) => {
  const {state} = useContext(AppointmentContext);

  return (
    <View>
      <Text> Please explain your issue below: </Text>
      <Input
        label="Issue"
        value={issue}
        onChangeText={setIssue}
      />
    </View>
  )
};

export default Issue;