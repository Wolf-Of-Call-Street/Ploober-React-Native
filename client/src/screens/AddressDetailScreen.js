import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import {
KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import AddressForm from '../components/AddressForm';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const AddressDetailScreen = ({ navigation }) => {
  const { state: { addresses }, setAddressInfo, sendAddressInfo } = useContext(AppointmentContext);

  useEffect(() => {
      if (addresses.length) {
        sendAddressInfo(addresses);
      }
  }, [addresses]);

  return (
    <LinearGradient
    colors={['#2FA3F1', '#CBDBFC', 'white']}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 0, y: 1.0 }}
    locations={[0.0, 0.5, 1]}
  >
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
            overwritePrivileges
            navigation={navigation}
            validCard
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
    </LinearGradient >
  )
}

const styles = StyleSheet.create({});

export default AddressDetailScreen;