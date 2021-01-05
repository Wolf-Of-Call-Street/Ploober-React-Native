import React, { useContext, useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Context as AppointmentContext } from '../context/AppointmentContext';


const Plumber = () => {

  return (
    <View>
      <Text h4>I am a plumber!</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default Plumber;