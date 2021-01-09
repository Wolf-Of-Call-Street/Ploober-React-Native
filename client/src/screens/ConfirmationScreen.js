import React, { useContext, useState, useEffect} from 'react';
import { StyleSheet, FlatList, ScrollView, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Card, Text, Button, ListItem, Divider} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {
  Context as AppointmentContext
} from '../context/AppointmentContext';
import { NavigationEvents } from 'react-navigation';
import ConfirmModal from '../components/ConfirmModal';
const ConfirmationScreen = ({ navigation }) => {
  const { state: { appointmentReason, dateTime, addresses, cardInfo, currentAddress, currentPayment, localBusinesses, businessInfo }, fetchAddresses, fetchPaymentInfo, setCurrentAddress, setCurrentPayment, submitOrder, state } = useContext(AppointmentContext);

  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState({});

  const day = new Date(dateTime).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const time = new Date(dateTime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  useEffect(() => {
    setOrder({
      businessId: businessInfo.id,
      businessName: businessInfo.name,
      appointmentReason: appointmentReason,
      dateTime: dateTime,
      address: currentAddress
    })
  }, [currentAddress]);
  return (
    <>
      <NavigationEvents
        onWillFocus={() => {
          fetchPaymentInfo();
          fetchAddresses();
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
      >
        <Text h1 style={{ textAlign: 'center' }}>
          {businessInfo.name}
      </Text>
        <Divider />
        <Card>
          <Card.Title style={{ fontSize: 16 }}>Your Issue</Card.Title>
          <Card.Divider />
          <Text>
            {appointmentReason}
        </Text>
        </Card>
        <Spacer>
          <Text h3 style={styles.center}> Appointment Date</Text>
        </Spacer>
        <Spacer>
          { dateTime === 0 ?
            <Text style={styles.center}> Select a Valid Appointment Slot</Text> :
            <Text style={styles.center}>{day} at {time}</Text>
          }
        </Spacer>
        <Divider />
        <Spacer>
          <Text h3 style={styles.center}>Payment Information</Text>
          <Spacer>
            <FlatList
              data={cardInfo}
              keyExtractor={(item, index) => item._id || String(index)}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress ={() => setCurrentPayment(item)}
                  >
                    <ListItem
                      key={item.item_id}
                      bottomDivider>
                      <ListItem.Content>
                        <ListItem.Title>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)} ending in {item.number.slice(-4)}
                        </ListItem.Title>
                        <ListItem.Subtitle>
                          Exp: {item.expiry.slice(0,2) + '/' + item.expiry.slice(2,4)}
                        </ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  </TouchableOpacity>
                )
              }}
            >
            </FlatList>
          </Spacer>
          <Button
            title="Add a New Card"
            onPress={() => navigation.navigate('Card')}
          />
        </Spacer>
        <Divider />
        <Spacer>
          <Text h3 style={styles.center}>Addresses</Text>
          <Spacer>
            <FlatList
              data={addresses}
              keyExtractor={(item, index) => item._id || String(index)}
              renderItem={({ item }) => {
                return (
                  <TouchableHighlight
                    onPress={async () => {
                      await setCurrentAddress(item);
                    }}
                  >
                    <ListItem
                      key={item.item_id}
                      bottomDivider>
                      <ListItem.Content>
                        <ListItem.Title>
                          {item.line1}
                        </ListItem.Title>
                        <ListItem.Subtitle>
                          {item.city}, {item.state} {item.zipcode}
                        </ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  </TouchableHighlight>
                )
              }}
            >
            </FlatList>
          </Spacer>
          <Button
            title="Add a New Address"
            onPress={() => {
              navigation.navigate('Address')
            }}
          />
        </Spacer>
        <Divider />
        <Spacer>
          <ConfirmModal
            showModal={showModal}
            setShowModal={setShowModal}
            navigation={navigation}
          />
          <Button title="Confirm"
            onPress={
              () => {
                submitOrder(order);
                setShowModal(true);
              }
            }
          />
        </Spacer>
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
});

export default ConfirmationScreen;