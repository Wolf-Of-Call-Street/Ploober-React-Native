import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import AccountForm from '../components/AccountForm';

// import { Button } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignIn } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <Text h2 style={styles.header}>Sign Up for Ploober</Text>
      <AccountForm
        screenName="Sign Up for Ploober"
        errorName={state.errorMessage}
        onSubmit={signup}
        navigateCallback={() => {
          navigation.navigate('Map');
        }}
      />
      <Button
        onPress={() => navigation.navigate('Signin')}
        title="Already have an account? Move to Sign In"
        style={{ marginTop: 20, marginBottom: 20 }}
      />
    </SafeAreaView>
  )
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150
  },
  header: {
    marginBottom: 30
  }
});

export default SignupScreen;

