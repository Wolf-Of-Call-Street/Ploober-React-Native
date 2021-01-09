import React, { useState, useContext, useEffect } from 'react';
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CreditCardInput } from 'react-native-vertical-credit-card-input';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const CardDetailScreen = ({ navigation }) => {
  const [ cardDetailData, setCardDetailData ] = useState({});
  const { state: { creditcards }, setCardInfo, sendCardInfo } = useContext(AppointmentContext);

  const _onChange = (formData) => {
    const { number, expiry, cvc, type, name} = formData.values;
    if (formData.valid) {
      setCardDetailData(
        { ...cardDetailData, number, expiry, cvc, type, name}
      );
    }
  };

  useEffect(() => {
      sendCardInfo(creditcards);
  }, [creditcards.length]);
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
            setAddressInfo={setCardDetailData}
            info={cardDetailData}
            overwritePrivileges={false}
            navigation={navigation}
            setCardInfo={setCardInfo}
            creditcards={creditcards}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({});

export default CardDetailScreen;