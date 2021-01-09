import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Map from '../components/Map';
import Plumber from '../components/Plumber';
import {Context as AppointmentContext} from '../context/AppointmentContext';
import { requestPermissionsAsync } from 'expo-location';
import Spacer from '../components/Spacer';

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
    <View style={styles.container}>
      <Text style={styles.text}>Plumbers Nearest You</Text>
      <Map currentLocation={{ lat, long }}/>
      {err ? <Text style={styles.err}>Please enable location services!</Text> : null}
      <Spacer />
      <Plumber navigation={navigation}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,

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