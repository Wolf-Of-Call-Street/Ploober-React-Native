import React, { useContext } from 'react';
import { Text } from 'react-native-elements'
import AddressForm from '../components/AddressForm';
import Spacer from '../components/Spacer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CreditCardInput } from 'react-native-vertical-credit-card-input';
import { Context as AppointmentContext } from '../context/AppointmentContext';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

const _onChange = (formData) => console.log(formData);

const CardDetailScreen = () => {
  const { state: { businessInfo, cardInfo}, setPaymentInfo, sendPaymentInfo } = useContext(AppointmentContext);

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

          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({});

export default CardDetailScreen;