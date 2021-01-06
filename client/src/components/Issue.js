import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';

const Issue = ({onSubmit}) => {
  const [issue, setIssue] = useState('');

  return (
    <View>
      <Text> Please explain your issue below: </Text>
      <Input
        label="Issue"
        value={issue}
        onChangeText={setIssue}
        autoCorrect={false}
      />
    </View>
  )
};

export default Issue;