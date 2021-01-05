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
      {screenName === 'Sign Up for Ploober' ?
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
        blurOnSubmit={false}
        secureTextEntry
      />
      {errorName ? <Text>{errorName}</Text> : null}
      {screenName === 'Sign Up for Ploober'
        ? <Button
            style={{ marginTop: 20 }}
            title="Submit"
            onPress={async () => {
              await onSubmit({ username, password, firstName, lastName });
              navigateCallback();
              }}
          />
        : <Button
            style={{ marginTop: 20 }}
            title="Submit"
            onPress={async () => {
              await onSubmit({ username, password });
              navigateCallback();
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