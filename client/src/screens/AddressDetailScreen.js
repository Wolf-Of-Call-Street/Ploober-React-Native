import React from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AddressForm from '../components/AddressForm';

const AddressDetailScreen = () => {
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
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView
  )
}

const styles = StyleSheet.create({});

export default AddressDetailScreen;