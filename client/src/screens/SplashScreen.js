import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';

const SplashScreen = ({ navigation }) => {
  const { tryLocalSignIn } = useContext(AuthContext);
  const [ready, setReady] = useState(false);

  const success = () => {
    setTimeout(() => {
      navigation.navigate('Map');
    }, 3000);
  };

  useEffect(() => {
    tryLocalSignIn(success, () => setReady(true))
  }, []);

  console.log(ready);
  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <Text>SPLAAAASH</Text>
      {ready ? <Button onPress={() => navigation.navigate('loginFlow')} title="Proceed to Login"/> : <Text>Loading...</Text>}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
});

export default SplashScreen;