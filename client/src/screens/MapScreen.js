import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Map from '../components/Map';
import Plumber from '../components/Plumber';
import {Context as AppointmentContext} from '../context/AppointmentContext';
import { requestPermissionsAsync } from 'expo-location';
import Spacer from '../components/Spacer';
import { LinearGradient } from 'expo-linear-gradient';

const MapScreen = ({ navigation }) => {
  const [err, setErr] = useState(null);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const { state, getLocalBusiness } = useContext(AppointmentContext);

  const startLocationTracking = async () => {
    try {
      const {granted} = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      setErr(null);
    } catch (err) {
      setErr(err);
    }
  };
  const getUserLocation =  () => {
        navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        getLocalBusiness(position.coords.latitude, position.coords.longitude);
      })
  };
  useEffect( () => {
    (async () =>  {
    await startLocationTracking();
    await getUserLocation();
        })()
  }, []);
  return (
    <LinearGradient
      colors={['#2FA3F1', '#CBDBFC', 'white']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0, y: 1.0 }}
      locations={[0.0, 0.5, 1]}
    >
    <View style={styles.container}>
      <Text style={styles.text}>Plumbers Nearest You</Text>
      <Map currentLocation={{ lat, long }}/>
      {err ? <Text style={styles.err}>Please enable location services!</Text> : null}
      <Spacer />
      <Plumber navigation={navigation}/>
    </View>
    </LinearGradient>

  )
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    zIndex: 1

  },
  err: {
    color: 'red',
    fontSize: 18
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 5,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: '#CBDBFC',
    paddingTop: 3
  }

});

export default MapScreen;