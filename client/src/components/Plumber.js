import React, { useContext, useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Text, FlatList } from 'react-native-elements';
import { Context as AppointmentContext } from '../context/AppointmentContext';
import APlumber from './APlumber';


const Plumber = () => {
  const { state } = useContext(AppointmentContext);
  const totalBusinesses = state.localBusinesses;


  if (totalBusinesses.length === 0) {
    return null
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{paddingBottom: 255}}>
          {state.localBusinesses.map(business => {
            return (
              <APlumber business={business} key={business.id}/>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CBDBFC',
  }
});

export default Plumber;