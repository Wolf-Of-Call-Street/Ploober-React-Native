import React, { useContext, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Text, FlatList } from 'react-native-elements';
import { Context as AppointmentContext } from '../context/AppointmentContext';
import APlumber from './APlumber';



const Plumber = ({ navigation }) => {

  const { state, getLocalBusiness } = useContext(AppointmentContext);


  if (state.localBusinesses.length === 0) {
    return null
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{paddingBottom: 255}} >
          {state.localBusinesses.map(business => {
            return (
              <View style={styles.businesspanel} key={business.id}>
                <APlumber business={business}  navigation={navigation}/>
              </View>
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
    borderWidth: 2,
    padding: 5
  },
  businesspanel: {
    // flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 2
  }
});

export default Plumber;