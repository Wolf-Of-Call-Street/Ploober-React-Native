import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Map from '../components/Map';
import Plumber from '../components/Plumber';
import {Context as AppointmentContext} from '../context/AppointmentContext';
import { requestPermissionsAsync } from 'expo-location';
import Spacer from '../components/Spacer';

const MapScreen = () => {
  const [err, setErr] = useState(null);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  console.log(lat, long, 'inside MapScreen');
  const {getLocalBusiness} = useContext(AppointmentContext);

  const startLocationTracking = async (next) => {
    try {
      const {granted} = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      setErr(null);
      next();
    } catch (err) {
      setErr(err);
    }
  };


  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    })
  };
  useEffect( () => {
     startLocationTracking(getUserLocation);
  }, []);


  return (
    <View style={styles.container}>
      <Map currentLocation={{ lat, long }}/>
      {err ? <Text style={styles.locationFail}>Please enable location services!</Text> : null}
      <Spacer />
      <Plumber />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderColor: 'green',
    borderWidth: 1
  },
  locationFail: {
    color: 'red',
    fontSize: 18
  }
});

export default MapScreen;