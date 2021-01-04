import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppointmentScreen from './client/src/screens/AppointmentScreen';
import ConfirmationScreen from './client/src/screens/ConfirmationScreen';
import MapScreen from './client/src/screens/MapScreen';
import SigninScreen from './client/src/screens/SigninScreen';
import SignupScreen from './client/src/screens/SignupScreen';


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createStackNavigator({
    Map: MapScreen,
    Appointment: AppointmentScreen,
    Confirmation: ConfirmationScreen
  })
});

const App =  createAppContainer(switchNavigator);

export default () => {
  return (
    <App />
  )
}