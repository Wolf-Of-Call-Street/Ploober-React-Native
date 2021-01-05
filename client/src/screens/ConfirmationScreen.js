import React, { useContext } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';
import {
  Context as AppointmentContext
} from '../context/AppointmentContext';

const ConfirmationScreen = () => {
  const { state: { cardInfo, addresses } } = useContext(AppointmentContext)
  return (
    <>
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
    </>
  )
};

const styles = StyleSheet.create({});

export default ConfirmationScreen;