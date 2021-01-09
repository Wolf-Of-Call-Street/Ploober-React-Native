import React, {
  useContext,
  useState,
  useEffect
} from 'react';

import {
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  TouchableHighlight,
  TouchableOpacity,
  LogBox,
} from 'react-native';

import {
  Card,
  Text,
  Button,
  ListItem,
  Divider
} from 'react-native-elements';

import {
  Context as AppointmentContext
} from '../context/AppointmentContext';

import { NavigationEvents } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import Spacer from '../components/Spacer';
import ConfirmModal from '../components/ConfirmModal';
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';

const ConfirmationScreen = ({ navigation }) => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested',
    'componentWillReceiveProps has been renamed']);

  const {
    state: {
      appointmentReason,
      dateTime,
      addresses,
      cardInfo,
      currentAddress,
      currentPayment,
      localBusinesses,
      businessInfo,
      creditcards
    },
    fetchAddresses,
    fetchPaymentInfo,
    setCurrentAddress,
    setCurrentPayment,
    submitOrder,
    state }
    = useContext(AppointmentContext);

  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState({});

  const day = new Date(dateTime)
    .toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
    });

  const time = new Date(dateTime)
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });

  const resetOrder = () => {
    setCurrentPayment('');
    setCurrentAddress('');
  }

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
    <LinearGradient
      colors={['#2FA3F1', '#CBDBFC', 'white']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0, y: 1.0 }}
      locations={[0.0, 0.5, 1]}
    >
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
        <Text style={styles.checkout}>
          Checkout
      </Text>
        <Card
          containerStyle={styles.cardContainer}
        >
          <View style={styles.cardTitleContiner}>
            <Card.FeaturedTitle style={styles.cardTitle}>{businessInfo.name}</Card.FeaturedTitle>
            <MaterialCommunityIcons name="table-clock" size={24} color="white" />
          </View>
          <Card.Divider />
          <View style={styles.cardContentContainer}>
            <View style={styles.cardContentRow}>
              <AntDesign name="calendar" size={24} color="white" />
              <Text style={styles.cardText}>{day}</Text>
            </View>
            <View style={styles.cardContentRow}>
              <Ionicons name="md-time-outline" size={24} color="white" />
              <Text style={styles.cardText}>{time}</Text>
            </View>
          </View>
          <Text>
            {appointmentReason}
          </Text>
        </Card>
        {/* <Spacer>
          <Text h3 style={styles.center}> Appointment Date</Text>
        </Spacer>
        <Spacer>
          { dateTime === 0 ?
            <Text style={styles.center}> Select a Valid Appointment Slot</Text> :
            <Text style={styles.center}>{day} at {time}</Text>
          }
        </Spacer>
        <Divider /> */}
        <Spacer>
          <Text style={styles.center}>Payment Information</Text>
          <Spacer>
            <FlatList
              data={creditcards}
              keyExtractor={(item, index) => item._id || String(index)}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => setCurrentPayment(item)}
                  >
                    <ListItem
                      key={item.item_id}
                      containerStyle={
                        {
                          backgroundColor:
                            item._id === currentPayment._id ? '#CBDBFC' : '#FFFFFF'
                        }}
                      bottomDivider>
                      <ListItem.Content>
                        <ListItem.Title>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)} ending in {item.number.slice(-4)}
                        </ListItem.Title>
                        <ListItem.Subtitle>
                          Exp: {item.expiry}
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
        <Spacer>
          <Text style={styles.center}>Locations</Text>
          <Spacer>
            <FlatList
              data={addresses}
              keyExtractor={(item, index) => item._id || String(index)}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    pressDuration={0.005}
                    activeOpacity={.5}
                    onPress={async () => {
                      await setCurrentAddress(item);
                    }}
                  >
                    <ListItem
                      key={item.item_id}
                      containerStyle={
                        {
                          backgroundColor:
                            item._id === currentAddress._id ? '#CBDBFC' : '#FFFFFF'
                        }}
                      bottomDivider>
                      <ListItem.Content>
                        <ListItem.Title>
                          {item.line1} {item.line2}
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
                resetOrder();
              }
            }
          />
        </Spacer>
        <Spacer>
          <Button title="Cancel"
            onPress={
              () => {
                resetOrder();
                navigation.navigate('Map');
              }
            }
          />
        </Spacer>
      </ScrollView>
    </LinearGradient>
  )
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#374DD5',
    borderWidth: 0,
    borderRadius: 7.5,
  },
  cardTitleContiner: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  cardContentContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  cardContentRow: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 12,
    paddingLeft: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    // alignSelf: 'flex-start',
    color: '#FFF'
  },
  cardText: {
    color: 'white',
    paddingLeft: 10,
    paddingTop: 3,
    fontSize: 15,
  },
  checkout: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
    paddingLeft: 10,
    paddingTop: 10,
  },
  center: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default ConfirmationScreen;