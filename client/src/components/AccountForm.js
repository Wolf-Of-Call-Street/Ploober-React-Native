import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { Jiro } from 'react-native-textinput-effects';
import { StyleSheet, ActivityIndicator } from 'react-native';
import userApi from '../api/userApi.js';

const AccountForm = ({ screenName, errorName, onSubmit, navigateCallback }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <>
        <ActivityIndicator size="large"/>
        {errorName ? <Text>{errorName}</Text> : null}
      </>
    )
  } else {
    return (
      <>
        {screenName === 'Sign Up for Ploober' ?
        <>
        <Jiro
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        autoCapitalize="none"
        autoCorrect={false}
        borderColor={'#374DD5'}
        inputPadding={16}
        inputStyle={{ color: 'white' }}
        />
        <Jiro
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        autoCapitalize="none"
        autoCorrect={false}
        borderColor={'#374DD5'}
        inputPadding={16}
        inputStyle={{ color: 'white' }}
        />
        </>
        : null}
        <Jiro
          label="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
          borderColor={'#374DD5'}
          inputPadding={16}
          inputStyle={{ color: 'white' }}
        />
        <Jiro
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          blurOnSubmit={false}
          borderColor={'#374DD5'}
          inputPadding={16}
          inputStyle={{ color: 'white' }}
          secureTextEntry
        />
        {errorName ? <Text style={styles.error}>{errorName}</Text> : null}
        {screenName === 'Sign Up for Ploober'
          ? <Button
              style={{ marginTop: 20 }}
              title="Submit"
              onPress={() => {
                setLoading(true);
                onSubmit({ username, password, firstName, lastName }, navigateCallback, setLoading);
                }}
            />
          : <Button
              style={{ marginTop: 20 }}
              title="Submit"
              onPress={() => {
                setLoading(true);
                onSubmit({ username, password }, navigateCallback, setLoading);
                }}
            />
        }
      </>
    )
  }
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 30
  },
  error: {
    color: "#FE2C16"
  }
})

export default AccountForm;