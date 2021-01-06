import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Image} from 'react-native-elements';
import { FontAwesome5, Foundation } from '@expo/vector-icons';

const APlumber = ({ business }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: business.image_url}} style={styles.image}/>
      <Text style={styles.name}>{business.name}</Text>
      <Button
        style={styles.button}
        raised={true}
        icon={
          <FontAwesome5
            name="toilet"
            size={10}
            color="white"
            style={styles.toilet}
          />
        }
      />

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  name: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    width: 200,
    alignSelf: 'center'

  },
  image: {
    flex: 1,
    height: 100,
    width: 150,
    margin: 5,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5
  }
});

export default APlumber;