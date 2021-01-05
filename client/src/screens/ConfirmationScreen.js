import React, { useContext } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';
import Spacer from '../components/Spacer';
import {
  Context as AppointmentContext
} from '../context/AppointmentContext';

const ConfirmationScreen = () => {
  const { state: { dateTime, cardInfo, addresses } } = useContext(AppointmentContext)

  const day = new Date(dateTime).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const time = new Date(dateTime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <>
      <Text h3> Appointment Date</Text>
      <Text>{day} at {time}</Text>
      <Spacer>
        <Text h3>Payment Information</Text>
        <FlatList
          data={cardInfo}
          keyExtractor={item => item.number}
          renderItem={({ item }) => {
            <ListItem bottomDivider>
              <ListItem.Title>
                Card Number Ending in {item.number.slice(-4)}
              </ListItem.Title>
            </ListItem>
          }}
        />
        <Button
          title="Add a New Card"
        />
      </Spacer>
      <Spacer>
        <Text h3>Addresses</Text>
        <FlatList
          data={addresses}
          keyExtractor={item => item.line1}
          renderItem={({ item }) => {
            <ListItem bottomDivider>
              <ListItem.Title>
                {item.line1}
                {item.line2}
                {item.zipcode}
                {item.state}
                {item.city}
              </ListItem.Title>
            </ListItem>
          }}
        />
        <Button
          title="Add a New Address"
        />
      </Spacer>
      <Button title="Confirm" />
    </>
  )
};

const styles = StyleSheet.create({});

export default ConfirmationScreen;