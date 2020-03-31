import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../navigators/MainStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type AppearanceSettingsScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'AppearanceSettings'
>;
type Props = {
  navigation: AppearanceSettingsScreenNavigationProp;
};

const AppearanceSettings = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to Appearance Settings!`}</Text>
      <Button
        onPress={() => navigation.navigate('GeneralSettings')}
        title="Go to General Settings"
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

export default AppearanceSettings;
