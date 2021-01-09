import React, {useState, useContext} from 'react';
import { View, Text, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const Issue = ({issue, setIssue, styles}) => {
  const {state} = useContext(AppointmentContext);

  return (
    <View >
      <Text style={styles.issueText}> Please explain your issue below: </Text>
      <TextInput
        style={styles.issueInput}
        label="Issue"
        value={issue}
        multiline={true}
        onChangeText={setIssue}
      />
    </View>
  )
};

export default Issue;