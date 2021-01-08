import React, { useContext, useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Image} from 'react-native-elements';
import { FontAwesome5} from '@expo/vector-icons';
import {Context as AppointmentContext} from '../context/AppointmentContext';
import BusinessIcon from './BusinessIcons';


const APlumber = ( { business, navigation } ) => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const { state, getBusiness } = useContext(AppointmentContext);

  return (
    <View>
      <Image source={{ uri: business.image_url}} style={styles.image}/>
      <BusinessIcon
      info={{
        rating: business.rating,
        reviews: business.review_count,
        phone: business.display_phone
      }}/>
      <Text style={styles.name}>{business.name}</Text>
      <Button
        style={styles.button}
        raised={true}
        title="Make an Appointment"
        icon={
          <FontAwesome5
            name="toilet"
            size={25}
            color="white"
            style={styles.toilet}
          />
        }
        onPress={() => {
          getBusiness(business.id, (() => navigation.navigate('Appointment')));
        }}
      />

    </View>
  )
};

const styles = StyleSheet.create({
  name: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    height: 100,
    width: 150,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5
  },
  toilet: {
    paddingRight: 10,
    height: 30
  }
});

export default APlumber;