import React from 'react';
import {StyleSheet, Text} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {MainStackParamList} from '../navigators/MainStack';

type ProfileScreenRouteProp = RouteProp<MainStackParamList, 'Profile'>;
type ProfileScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Profile'
>;
type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const Profile = ({navigation, route}: Props) => {
  const {username} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{`Hello ${username}!`}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
