import React, { useContext, useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Image} from 'react-native-elements';
import { FontAwesome5, Foundation } from '@expo/vector-icons';
import {Context as AppointmentContext} from '../context/AppointmentContext';


const APlumber = ( { business, navigation } ) => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const { state, getBusiness } = useContext(AppointmentContext);

  return (
    <View style={styles.container}>
      <Image source={{ uri: business.image_url}} style={styles.image}/>
      <Text style={styles.name}>{business.name}</Text>
      <Button
        style={styles.button}
        raised={true}
        icon={
          <FontAwesome5
            name="toilet"
            size={25}
            color="white"
          />
        }
        onPress={() => {
          getBusiness(business.id);
          navigation.navigate('Appointment');
        }}
      />

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    padding: 2
  },
  name: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    width: 200,
    alignSelf: 'center'

  },
  image: {
    flex: 1,
    height: 100,
    width: 150,
    margin: 5,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5
  }
});

export default APlumber;