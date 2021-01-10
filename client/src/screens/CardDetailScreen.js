import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { Text, Card } from 'react-native-elements'
import AddressForm from '../components/AddressForm';
import Spacer from '../components/Spacer';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CreditCardInput } from 'react-native-vertical-credit-card-input';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const CardDetailScreen = ({ navigation }) => {
  const [cardDetailData, setCardDetailData] = useState({});
  const { state: { creditcards }, setCardInfo, sendCardInfo } = useContext(AppointmentContext);
  const [validCard, setValidCard] = useState(false);

  const _onChange = (formData) => {
    const { number, expiry, cvc, type, name } = formData.values;
    if (formData.valid) {
      setCardDetailData(
        { ...cardDetailData, number, expiry, cvc, type, name }
      );
      setValidCard(true);
    } else {
      setValidCard(false);
    }
  };

  useEffect(() => {
    sendCardInfo(creditcards);
  }, [creditcards.length]);
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
            <Text
              h2
              style={styles.cardTitle}>
              Card Information
        </Text>
            <Card>
              <CreditCardInput
                cardImageFront={
                  require('../../../assets/card2.png')
                }
                cardImageBack={
                  require('../../../assets/card2-back.png')
                }
                requiresName
                onChange={_onChange}
              />
            </Card>
            <AddressForm
              headerText='Enter Billing Address'
              setAddressInfo={setCardDetailData}
              info={cardDetailData}
              overwritePrivileges={false}
              navigation={navigation}
              setCardInfo={setCardInfo}
              creditcards={creditcards}
              validCard={validCard}
            />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
});

export default CardDetailScreen;