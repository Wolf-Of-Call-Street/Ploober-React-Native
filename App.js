import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppointmentScreen from './client/src/screens/AppointmentScreen';
import ConfirmationScreen from './client/src/screens/ConfirmationScreen';
import MapScreen from './client/src/screens/MapScreen';
import SigninScreen from './client/src/screens/SigninScreen';
import SignupScreen from './client/src/screens/SignupScreen';
import AccountScreen from './client/src/screens/AccountScreen';
import CardDetailScreen from './client/src/screens/CardDetailScreen';
import AddressDetailScreen from './client/src/screens/AddressDetailScreen';
import SplashScreen from './client/src/screens/SplashScreen';
import { Provider as AppointmentProvider } from './client/src/context/AppointmentContext';
import { Provider as AuthProvider } from './client/src/context/AuthContext';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Feather, MaterialIcons} from '@expo/vector-icons';


const mainFlow = createStackNavigator({
  Map: MapScreen,
  Appointment: AppointmentScreen,
  Confirmation: ConfirmationScreen,
  Card: CardDetailScreen,
  Address: AddressDetailScreen,
});
const Account = createBottomTabNavigator({
  Account: AccountScreen,
});
mainFlow.navigationOptions = {
  title: 'Businesses',
  tabBarIcon: <Feather name="map" size={20} color="#374DD5" />
};

Account.navigationOptions = {
  title: 'History',
  tabBarIcon: <MaterialIcons name="account-circle" size={30} color="#374DD5"/>
}

const switchNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainTabs: createBottomTabNavigator({
    mainFlow,
    Account
  })
});

const App =  createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider >
      <AppointmentProvider>
        <App />
      </AppointmentProvider>
    </AuthProvider>
  )
}