import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import AccountForm from '../components/AccountForm';

// import { Button } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AccountForm
        screenName="Sign Up"
        errorName={state.errorMessage}
        onSubmit={signup}
        navigateCallback={() => navigation.navigate('Map')}
      />
      <Button
        onPress={() => navigation.navigate('Signin')}
        title="Already have an account? Move to Sign In"
        style={{ marginTop: 20, marginBottom: 20 }}
      />
      <Button onPress={() => navigation.navigate('Map')} title="Map"/>
      <Button onPress={() => navigation.navigate('Appointment')} title="Appointment"/>
      <Button onPress={() => navigation.navigate('Confirmation')} title="Confirmation"/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150
  }
});

export default SignupScreen;

