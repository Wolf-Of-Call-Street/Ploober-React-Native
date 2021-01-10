import React, {useState, useContext} from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Input } from 'react-native-elements';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const Issue = ({issue, setIssue, styles}) => {
  const {state} = useContext(AppointmentContext);

  return (
    <View style={style.issueView}>
      <Text style={styles.issueText}> Please explain your issue below: </Text>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <TextInput
          style={styles.issueInput}
          label="Issue"
          value={issue}
          multiline={true}
          onChangeText={setIssue}
        />
      </TouchableWithoutFeedback>
    </View>
  )
};

export default Issue;