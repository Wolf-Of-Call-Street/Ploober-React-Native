
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const PlumberInfo = ({styles}) => {

  const { state } = useContext(AppointmentContext);

  return (
    <View>
      <Text style={styles.businessName}>{state.businessInfo.name}</Text>
      {state.businessInfo.location.display_address.map((line, index) => {
          return (
            <Text style={styles.genericText} key={index}> {line} </Text>
          )
        })}
    </View>
  )

};

export default PlumberInfo;