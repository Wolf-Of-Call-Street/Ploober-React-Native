import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import AccountForm from '../components/AccountForm';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View>
      <AccountForm screenName="Sign In" onSubmit={signin} errorName={state.errorMessage} />
      <Button onPress={() => navigation.navigate('Signup')} title="Don't have an account? Move to Sign Up" />
    </View>
  )
};

const styles = StyleSheet.create({});

export default SigninScreen;