import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Map from '../components/Map';
import Plumber from '../components/Plumber';
import {Context as AppointmentContext} from '../context/AppointmentContext';

const MapScreen = () => {
  const {getLocalBusiness} = useContext(AppointmentContext);

  return (
    <View>
      <Map />
      <Plumber />
    </View>
  )
};

const styles = StyleSheet.create({});

export default MapScreen;