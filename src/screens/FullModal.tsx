import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

type FullModalNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FullModal'
>;

type Props = {navigation: FullModalNavigationProp};

const FullModal = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.modalText}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 30,
  },
});

export default FullModal;
