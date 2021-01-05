import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import userApi from '../api/userApi.js';

const AccountForm = ({ screenName, errorName, onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <>
      <Text h2>{screenName}</Text>
      <Input
        title="First Name"
        value={firstName}
        onChangeText={setFirstName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        title="Last Name"
        value={lastName}
        onChangeText={setLastName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        title="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        title="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {}
      <Button
        title="Submit"
        onPress={() => {
          onSubmit({ username, password, firstName, lastName });
        }}
      />
    </>
  )
};

export default AccountForm;