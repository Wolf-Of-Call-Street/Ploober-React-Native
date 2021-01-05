import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppointmentScreen from './client/src/screens/AppointmentScreen';
import ConfirmationScreen from './client/src/screens/ConfirmationScreen';
import MapScreen from './client/src/screens/MapScreen';
import SigninScreen from './client/src/screens/SigninScreen';
import SignupScreen from './client/src/screens/SignupScreen';
import HistoryScreen from './client/src/screens/HistoryScreen';
import { Provider as AppointmentProvider } from './client/src/context/AppointmentContext';
import { Provider as AuthProvider } from './client/src/context/AuthContext';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainTabs: createBottomTabNavigator({
    mainFlow: createStackNavigator({
      Map: MapScreen,
      Appointment: AppointmentScreen,
      Confirmation: ConfirmationScreen,
    }),
    History: HistoryScreen
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