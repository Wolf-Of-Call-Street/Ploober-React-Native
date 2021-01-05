import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import userApi from '../api/userApi.js';

const AccountForm = ({ screenName, errorName, onSubmit, navigateCallback }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <>
      <Text h2 style={styles.header}>{screenName}</Text>
      {screenName === 'Sign Up' ?
      <>
      <Input
      label="First Name"
      value={firstName}
      onChangeText={setFirstName}
      autoCapitalize="none"
      autoCorrect={false}
      />
      <Input
      label="Last Name"
      value={lastName}
      onChangeText={setLastName}
      autoCapitalize="none"
      autoCorrect={false}
      />
      </>
      : null}
      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorName ? <Text>{errorName}</Text> : null}
      {screenName === 'Sign Up'
        ? <Button
            style={{ marginTop: 20 }}
            title="Submit"
            onPress={() => {
              onSubmit({ username, password, firstName, lastName });
              if (!errorName) {
                navigateCallback();
              }
              }}
          />
        : <Button
            style={{ marginTop: 20 }}
            title="Submit"
            onPress={() => {
              onSubmit({ username, password });
              if (!errorName) {
                navigateCallback();
              }
              }}
          />
      }
    </>
  )
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 30
  }
})

export default AccountForm;