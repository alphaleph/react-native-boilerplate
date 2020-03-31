import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {DrawerStackProp} from '../navigators/MainDrawer';

const DrawerButton = () => {
  const navigation = useNavigation<DrawerStackProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={styles.buttonText}>Toggle Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonText: {
    color: '#432321',
    fontSize: 14,
  },
});

export default DrawerButton;
