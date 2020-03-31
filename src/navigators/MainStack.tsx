import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {RootStackParamList} from 'App';

export type MainStackParamList = {
  Home: undefined;
  Profile: {
    username: string;
  };
  GeneralSettings: undefined;
  AppearanceSettings: undefined;
} & RootStackParamList;

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5FDD9D',
        },
        headerTintColor: '#1E2322',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home Screen'}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile Screen'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
