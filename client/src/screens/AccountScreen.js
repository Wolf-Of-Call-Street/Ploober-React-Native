import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, Button, ListItem } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext';
import { Context as AppointmentContext } from '../context/AppointmentContext';

const AccountScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const { state, getHistory } = useContext(AppointmentContext);

  useEffect(() => {
    getHistory();
  }, [])

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
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <View style={styles.section}>
        <Text h2>Account Options:</Text>
        <View style={{flex: 1}}/>
        <Button
          onPress={() => logout(() => navigation.navigate('Signin') )}
          title="Log Out"
          style={{ marginBottom: 20 }}
        />
      </View>
      <View style={styles.section, {flex: 3}}>
        <Text h2>Order History:</Text>
        <FlatList
          style={styles.historyList}
          data={state.history}
          keyExtractor={(item, index) => item._id || index.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <ListItem style={styles.historyItem} bottomDivider >
                  <View style={{flexDirection: "column", flex: 1}}>
                    <ListItem.Title>{item.businessName}</ListItem.Title>
                    <Text>{timeConverter(item.dateTime)}</Text>
                  </View>
                  <View style={{flexDirection: "column", flex: 1}}>
                    <Text>{item.address.line1}</Text>
                    {item.address.line2 ? <Text>{item.address.line2}</Text> : null}
                    <Text>{`${item.address.city}, ${item.address.state} ${item.address.zipcode}`}</Text>
                  </View>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  section: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
  historyList: {
    flex: 1
  },
  historyItem: {
    justifyContent: 'space-between',
    backgroundColor: "#CBDBFC"
  }
});

export default AccountScreen;