import React, { useContext, useState } from 'react';
import { StyleSheet, FlatList, ScrollView, View, TouchableOpacity } from 'react-native';
import { Card, Text, Button, ListItem, Divider } from 'react-native-elements';
import Spacer from '../components/Spacer';
import {
  Context as AppointmentContext
} from '../context/AppointmentContext';
import { NavigationEvents } from 'react-navigation';
import ConfirmModal from '../components/ConfirmModal';

const ConfirmationScreen = ({ navigation }) => {
  const { state: { appointmentReason, dateTime, addresses, cardInfo, currentAddress, currentPayment, localBusinesses }, fetchAddresses, fetchPaymentInfo, setCurrentAddress, setCurrentPayment, submitOrder, state } = useContext(AppointmentContext);

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
  console.log(order);
  return (
    <>
      <NavigationEvents
        onWillFocus={() => {
          fetchAddresses();
          fetchPaymentInfo();
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
      >
        <Text h1 style={{ textAlign: 'center' }}>
          {/* Temporary Local Business Name */}
          {localBusinesses[0].name}
      </Text>
        <Divider />
        <Card>
          <Card.Title style={{ fontSize: 16 }}>Your Issue</Card.Title>
          <Card.Divider />
          <Text>
            Skate ipsum dolor sit amet, crail grab Slimeballs tailslide camel back gap bigspin full-cab hip. Coffin fastplant Tracker tuna-flip late fakie out concave. Trucks bone air no comply hang-up masonite air layback. Rail slide shinner gap frigid air stalefish kick-nose slide. Rails street boneless sketchy bigspin salad grind indy grab. Deck fastplant half-flip carve 1080 late layback Gator Mark Anthony. Varial ollie ollie hole chicken wing baseplate freestyle hang ten.
        </Text>
        </Card>
        <Spacer>
          <Text h3 style={styles.center}> Appointment Date</Text>
        </Spacer>
        <Spacer>
          <Text style={styles.center}>{day} at {time}</Text>
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
                          {item.number}
                        </ListItem.Title>
                        <ListItem.Subtitle>
                          {item.type}, {item.expiry} {item.name}
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
                  <TouchableOpacity
                    onPress={() => {
                      setCurrentAddress(item)
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
                  </TouchableOpacity>
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
          />
          <Button title="Confirm"
            onPress={
              () => {
                setOrder({
                  businessId: localBusinesses[0].id,
                  businessName: localBusinesses[0].name,
                  appointmentReason: 'appointmentReasonTest',
                  dateTime: dateTime,
                  address: currentAddress
                })
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