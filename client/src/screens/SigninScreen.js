import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import AccountForm from '../components/AccountForm';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AccountForm
        screenName="Sign In"
        onSubmit={signin}
        errorName={state.errorMessage}
        navigateCallback={() => navigation.navigate('Map')}
      />
      <Button style={{ marginTop: 20 }} onPress={() => navigation.navigate('Signup')} title="Don't have an account? Move to Sign Up" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});

export default SigninScreen;