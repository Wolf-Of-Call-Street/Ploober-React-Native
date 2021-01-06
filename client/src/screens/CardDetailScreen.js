import React from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { Text } from 'react-native-elements'
import AddressForm from '../components/AddressForm';
import Spacer from '../components/Spacer';
import {
  CreditCardInput
} from 'react-native-vertical-credit-card-input';

const _onChange = (formData) =>
  console.log(formData);

const CardDetailScreen = () => {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <Text
          h2
          style={{ fontSize: 24, alignSelf: 'center' }}>
          Card Information
        </Text>
        <CreditCardInput
          cardImageFront={
            require('../../../assets/card-front.png')
          }
          cardImageBack={
            require('../../../assets/card-back.png')
          }
          requiresName
          onChange={_onChange}
        />
        <AddressForm
          headerText='Enter Billing Address'
          additionalValidation
          valid
        />
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({});

export default CardDetailScreen;