import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import AccountForm from '../components/AccountForm';

// import { Button } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View>
      <AccountForm screenName="Sign Up" errorName={state.errorMessage} onSubmit={signup}/>
      <Button onPress={() => navigation.navigate('Signin')} title="Already have an account? Move to Sign In" />
      <Button onPress={() => navigation.navigate('Signin')} title="Signin" />
      <Button onPress={() => navigation.navigate('Map')} title="Map"/>
      <Button onPress={() => navigation.navigate('Appointment')} title="Appointment"/>
      <Button onPress={() => navigation.navigate('Confirmation')} title="Confirmation"/>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SignupScreen;

