import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const AccountScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const { state, getHistory } = useContext(AppointmentContext);

  useEffect(() => {
    getHistory();
  }, [])

  // Need to query Yelp API to get name of business
  // OR when we submit to history, we should include the name of the business

  const timeConverter = (timeInMs) => {
    let date = new Date(timeInMs);
    let day = date.getDate();
    let month = date.getMonth() + 1; // 0 indexed
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes() + 1;
    let timestamp = 'AM';
    if (hour > 12) {
        timestamp = 'PM';
        hour = hour - 12;
    }
    if (hour === 0) {
        hour = 12;
    }
    return `${month}/${day}/${year}, ${hour}:${minute} ${timestamp}`;
  };

  return (
    <View>
      <View>
        <Text h2>Account Options:</Text>
        <Button onPress={() => logout(() => navigation.navigate('Signin') )} title="Log Out"/>
      </View>
      <View>
        <Text h2>Order History:</Text>
        <FlatList
          data={state.history}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <ListItem style={styles.historyItem}>
                <ListItem.Title>PLACEHOLDER FOR NAME OF BUSINESS</ListItem.Title>
                <Text>{timeConverter(item.dateTime)}</Text>
              </ListItem>
            )
          }}
        />
      </View>
            {/* FOR TESTING PURPOSES ONLY REMOVE THIS LATER */}
            <Button
      onPress={() => navigation.navigate('Confirmation')}
      title="Confirmation"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  historyItem: {
    flexDirection: 'column'
  }
});

export default AccountScreen;