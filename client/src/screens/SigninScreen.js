import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AccountForm from '../components/AccountForm';

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View>
      <AccountForm screenName="Sign In" onSubmit={signin} errorName={state.errorMessage} />

    </View>
  )
};

const styles = StyleSheet.create({});

export default SigninScreen;