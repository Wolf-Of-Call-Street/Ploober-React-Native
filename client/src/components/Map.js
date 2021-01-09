import React, { useContext, useEffect } from 'react';
import MapView from 'react-native-maps';
import { Text, Image } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { Context as AppointmentContext } from '../context/AppointmentContext';
import { Marker } from 'react-native-maps';

const Map = ({ currentLocation }) => {
  const {state} = useContext(AppointmentContext);
  const lat = currentLocation.lat;
  const long = currentLocation.long;
  const location = {
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  };

  var dotImage = require('../../../assets/Toilet.png');

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation={true}
      >
        {state.localBusinesses.map(marker => (
          <Marker
            title={marker.name}
            key={marker.id}
            coordinate={{
              latitude: marker.coordinates.latitude,
              longitude: marker.coordinates.longitude
            }}
          >
            <Image
              source={dotImage}
              style={{height: 40, width: 40}}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderColor: '#CBDBFC',
    borderWidth: 5
  },
  map: {
    height: 200,
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  }
});

export default Map;