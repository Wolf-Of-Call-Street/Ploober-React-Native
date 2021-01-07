import React, { useContext, useEffect } from 'react';
import MapView from 'react-native-maps';
import { Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import {Context as AppointmentContext} from '../context/AppointmentContext';

const Map = ({ currentLocation }) => {

  const lat = currentLocation.lat;
  const long = currentLocation.long;
  const location = {
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  };


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation={true}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderColor: '#CBDBFC',
    borderWidth: 2
  },
  map: {
    height: 200,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  }
});

export default Map;