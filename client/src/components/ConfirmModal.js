import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-elements';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';

const ConfirmModal = ({showModal, setShowModal}) => {
  const toggleModal = () => {
    setShowModal(!showModal);
  }
  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={showModal}
      >
        <Card
          containerStyle={styles.card}
        >
        <Text h1
          style={{textAlign: 'center'}}
        >
          Appointment Confirmed!
        </Text>
        <AntDesign
          name='checkcircle'
          size={70}
          color='green'
          style={{alignSelf: 'center', paddingTop: 25}}
        />
        <Button
          title="Continue"
          onPress={toggleModal}
          style={{paddingTop: 25}}
        />
        </Card>
      </Modal>
    </View>
  )
};

const styles=StyleSheet.create({
  card: {
    height: 300
  }
})

export default ConfirmModal;