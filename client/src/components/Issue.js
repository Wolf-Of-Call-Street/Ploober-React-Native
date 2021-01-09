import React, {useState, useContext} from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const Issue = ({issue, setIssue, styles}) => {
  const {state} = useContext(AppointmentContext);

  return (
    <View style={styles.issueView}>
      <Text style={styles.issueText}> Please explain your issue below: </Text>
      <Input
        style={styles.issueInput}
        label="Issue"
        value={issue}
        onChangeText={setIssue}
      />
    </View>
  )
};

export default Issue;