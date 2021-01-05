import React, { useContext } from 'react';
import MapView from 'react-native-maps';
import { Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

const Map = () => {

  return (
    <View style={styles.map}>
      <Text h4>Plumbers Nearest You</Text>
      <MapView style={styles.map}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  map: {
    height: 300,
    marginBottom: 30
  }
});

export default Map;