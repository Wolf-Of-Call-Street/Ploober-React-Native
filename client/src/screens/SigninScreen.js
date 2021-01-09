import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AccountForm from '../components/AccountForm';

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <Text h2 style={styles.header}>Sign In to Ploober</Text>
      <AccountForm
        screenName="Sign In to Ploober"
        onSubmit={signin}
        errorName={state.errorMessage}
        navigateCallback={() => {
          navigation.navigate('Map');
        }}
      />
      <Button style={{ marginTop: 20 }} onPress={() => navigation.navigate('Signup')} title="Don't have an account? Move to Sign Up" />
    </SafeAreaView>
  )
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingBottom: 200,
    backgroundColor: "#CBDBFC"
  },
  header: {
    marginBottom: 30,
    fontWeight: "bold"
  }
});

export default SigninScreen;