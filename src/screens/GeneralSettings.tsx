import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../navigators/MainStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type GeneralSettingsScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'GeneralSettings'
>;
type Props = {
  navigation: GeneralSettingsScreenNavigationProp;
};

const GeneralSettings = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to Settings!`}</Text>
      <Button
        onPress={() => navigation.navigate('AppearanceSettings')}
        title="Go to Appearance Settings"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GeneralSettings;
