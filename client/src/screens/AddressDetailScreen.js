import React from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import AddressForm from '../components/AddressForm';

const AddressDetailScreen = () => {
  return (
    <View>
      <AddressForm
        headerText='Enter Address'
        additionalValidation={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default AddressDetailScreen;