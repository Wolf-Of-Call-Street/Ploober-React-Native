import React, { useContext, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Context as AppointmentContext } from '../context/AppointmentContext';
import APlumber from './APlumber';



const Plumber = ({ navigation }) => {

  const { state, getLocalBusiness } = useContext(AppointmentContext);


  if (state.localBusinesses.length === 0) {
    return null
  }
  return (

          <FlatList
            data={state.localBusinesses}
            keyExtractor={(business) => business.id}
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}
            renderItem={({ item }) => {
              return (
                <View style={styles.businesspanel} >
                <APlumber business={item}  navigation={navigation}/>
              </View>
              )
            }}
          >
          </FlatList>
    // </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CBDBFC',
    borderWidth: 2,
    padding: 10,
    height: 440
  },
  businesspanel: {
    marginBottom: 10,
    borderBottomWidth: 2,
  }
});

export default Plumber;