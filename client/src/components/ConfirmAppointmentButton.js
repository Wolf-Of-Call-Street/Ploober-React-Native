import React from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-elements';

const Confirm = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to Payment"
        onPress={() => {
          navigation.navigate('Confirmation');
        }}
      />
    </View>
  )
};

export default Confirm;