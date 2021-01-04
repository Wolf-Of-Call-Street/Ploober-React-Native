import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import { Button } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Signup sCREENENN</Text>
      <Button onPress={() => navigation.navigate('Signin')} title="Signin" />
      <Button onPress={() => navigation.navigate('Map')} title="Map"/>
      <Button onPress={() => navigation.navigate('Appointment')} title="Appointment"/>
      <Button onPress={() => navigation.navigate('Confirmation')} title="Confirmation"/>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SignupScreen;

