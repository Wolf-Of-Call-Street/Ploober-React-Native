import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = ({ navigation }) => {
  const { state, logout } = useContext(AuthContext);

  return (
    <View>
      <Text h2>Account Screennnenenennenene</Text>
      <Button onPress={() => logout(() => navigation.navigate('Signin') )} title="Log Out"/>
      {/* FOR TESTING PURPOSES ONLY REMOVE THIS LATER */}
      <Button
      onPress={() => navigation.navigate('Confirmation')}
      title="Confirmation"
      />
    </View>
  )
};

const styles = StyleSheet.create({});

export default AccountScreen;