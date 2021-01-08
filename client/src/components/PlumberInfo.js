
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const PlumberInfo = () => {
  const { state } = useContext(AppointmentContext);

  return (
    <View>
      <Text> Info here!! </Text>
    </View>
  )
};

export default PlumberInfo;