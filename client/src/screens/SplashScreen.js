import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const SplashScreen = ({ navigation }) => {
  const { tryLocalSignIn } = useContext(AuthContext);
  const [ready, setReady] = useState(false);

  const success = () => {
    setTimeout(() => {
      navigation.navigate('Map');
    }, 3000);
  };

  useEffect(() => {
    tryLocalSignIn(success, () => setTimeout(() => {setReady(true)}, 1500)) //set to true
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <Text h1 style={styles.header}>Ploober</Text>
      <Spacer />
      <Text h4 style={styles.subtext}>The Uber for Plumbers</Text>
      {ready ?
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('loginFlow')}
        title="Proceed to Login"
      />
      : <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color="black"
            style={styles.spinner}
          />
          <Text style={styles.loading}>Loading...</Text>
      </View>
      }
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#CBDBFC",
    paddingHorizontal: 25
  },
  header: {
    fontWeight: "bold"
  },
  subtext: {
    fontStyle: "italic"
  },
  button: {
    marginTop: 200
  },
  loading: {
    marginTop: 30,
    fontSize: 25
  },
  loadingContainer: {
    marginTop: 200
  },
  spinner: {
    marginBottom: 50
  }
});

export default SplashScreen;