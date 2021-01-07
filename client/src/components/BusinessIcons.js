import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from './Spacer';
import StarRating from 'react-native-star-rating';


const BusinessIcon = ({info}) => {

  return (
    <View style={styles.orientation}>
    <Text style={styles.ratings}>
      <StarRating
      maxStars={5}
      rating={info.rating}
      starSize={20}
      fullStarColor='#FDCC0D'
      starStyle={{
        paddingTop: 10
      }}
    />
    </Text>
    <Text style={styles.reviews}>{info.reviews} Reviews</Text>
    <Button style={styles.phone}title={info.phone} />

    </View>
  )
};

const styles = StyleSheet.create({
  orientation: {
    flexDirection: 'column',
    width: 180,
    position: 'absolute',
    left: 160,
    height: 100,
    padding: 2
  },
  ratings: {
    fontWeight: 'bold',
  },
  reviews: {
    fontWeight: 'bold',
    bottom: 18
  },
  phone: {
    bottom: 7,
    right: 20,
    width: 200
  }
});

export default BusinessIcon;