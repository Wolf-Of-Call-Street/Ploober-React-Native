import React, { useContext } from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import {
KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import AddressForm from '../components/AddressForm';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const AddressDetailScreen = () => {
  const { state: { addresses }, setAddressInfo } = useContext(AppointmentContext);
  console.log('addresses', JSON.stringify(addresses, null, " "));
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      extraHeight={150}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 }}
        >
          <AddressForm
            headerText='Enter Address'
            additionalValidation={false}
            setAddressInfo={setAddressInfo}
            addresses={addresses}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({});

export default AddressDetailScreen;