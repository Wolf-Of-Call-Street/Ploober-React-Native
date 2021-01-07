import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import {
KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import AddressForm from '../components/AddressForm';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const AddressDetailScreen = () => {
  const { state: { addresses }, setAddressInfo, sendAddressInfo } = useContext(AppointmentContext);

  useEffect(() => {
      if (addresses.length) {
        sendAddressInfo(addresses);
      }
  }, [addresses]);

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
            sendAddressInfo={sendAddressInfo}
            addresses={addresses}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({});

export default AddressDetailScreen;