import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddressForm from '../components/AddressForm';

const AddressDetailScreen = () => {
  return (
    <View>
      <AddressForm
        textHeader='Enter Address'
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default AddressDetailScreen;