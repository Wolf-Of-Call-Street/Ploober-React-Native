import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';

const AddressForm = ({ textHeader }) => {
  return (
    <>
      <Text h2 style={{ textAlign: 'center', fontSize: 24 }}>
        {textHeader}
      </Text>
      <Formik
        const initialValues={{
          line1: '',
          line2: '',
          zip: '',
          city: '',
          state: ''
        }}

        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, " "));
        }}
      >
        {(props) => (
          <View>
            <Input
              label='Street: Line 1'
              placeholder='6060 Center Dr'
              onChangeText={props.handleChange('line1')}
              value={props.values.line1}
            />
            <Input
              label='Street: Line 2'
              placeholder='Suite 950'
              onChangeText={props.handleChange('line2')}
              value={props.values.line2}
            />
            <Input
              label='Zip Code'
              placeholder='90045'
              onChangeText={props.handleChange('zip')}
              value={props.values.zip}
            />
            <Input
              label='City'
              placeholder='Los Angeles'
              onChangeText={props.handleChange('city')}
              value={props.values.city}
            />
            <Input
              label='State'
              placeholder='CA'
              onChangeText={props.handleChange('state')}
              value={props.values.state}
            />
            <Button
              title='Submit'
              onPress={props.handleSubmit}
            />
          </View>
        )}


      </Formik>
    </>
  )
}

export default AddressForm;
