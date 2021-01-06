import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';


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
      <Text style={styles.title}>Plumbers Nearest You</Text>
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
    borderColor: 'red',
    borderWidth: 1
  },
  map: {
    height: 300,
    marginBottom: 10
  },
  title: {
    fontSize: 24
  }
});

export default Map;