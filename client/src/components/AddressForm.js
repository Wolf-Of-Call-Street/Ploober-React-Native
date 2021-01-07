import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Formik } from 'formik';
import * as Yup from 'yup';

const AddressValidationSchema = Yup.object({
  line1: Yup.string().required(),
  line2: Yup.string().required(),
  zipcode: Yup.string()
    .required()
    .min(5, 'The zip code you entered is too short'),
  city: Yup.string()
    .required()
    .max(40, 'The city you entered is too long'),
  state: Yup.string()
    .required()
    .min(2, 'The state you entered is too short'),
})

const AddressForm = ({ headerText, setAddressInfo, sendAddressInfo, addresses }) => {
  console.log('AddressForm addresses', addresses);
  return (
    <>
      <Spacer>
        <Text h2 style={{ textAlign: 'center', fontSize: 24 }}>
          {headerText}
        </Text>
      </Spacer>
      <Formik
        const initialValues={{
          line1: '',
          line2: '',
          zipcode: '',
          city: '',
          state: ''
        }}
        validationSchema={AddressValidationSchema}
        onSubmit={async (values) => {
          setAddressInfo(values);
          // sendAddressInfo(addresses);
        }}
      >
        {(props) => (
          <View>
            <Input
              label='Street: Line 1'
              placeholder='6060 Center Dr'
              onChangeText={props.handleChange('line1')}
              value={props.values.line1}
              containerStyle={styles.input}
            />
            <Text style={styles.errorText}>
              {props.touched.line1 && props.errors.line1}
            </Text>
            <Input
              label='Street: Line 2'
              placeholder='Suite 950'
              onChangeText={props.handleChange('line2')}
              value={props.values.line2}
              containerStyle={styles.input}
            />
            <Text style={styles.errorText}>
              {props.touched.line2 && props.errors.line2}
            </Text>
            <Input
              label='Zip Code'
              placeholder='90045'
              onChangeText={props.handleChange('zipcode')}
              value={props.values.zipcode}
              containerStyle={styles.input}
            />
            <Text style={styles.errorText}>
              {props.touched.zipcode && props.errors.zipcode}
            </Text>
            <Input
              label='City'
              placeholder='Los Angeles'
              onChangeText={props.handleChange('city')}
              value={props.values.city}
              containerStyle={styles.input}
            />
            <Text style={styles.errorText}>
              {props.touched.city && props.errors.city}
            </Text>
            <Input
              label='State'
              placeholder='CA'
              onChangeText={props.handleChange('state')}
              value={props.values.state}
              containerStyle={styles.input}
            />
            <Text style={styles.errorText}>
              {props.touched.state && props.errors.state}
            </Text>
            <Button
              title='Submit'
              onPress={props.handleSubmit}
              style={styles.button}
            />
          </View>
        )}
      </Formik>
    </>
  )
}

const styles = StyleSheet.create({
  errorText: {
    color: '#FE2C16',
    marginLeft: 10,
  },
  input: {
    height: 65,
    marginTop: 15,
  },
  button: {
    marginTop: 15,
  }
})

export default AddressForm;
