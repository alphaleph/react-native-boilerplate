import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import GeneralSettings from '../screens/GeneralSettings';
import AppearanceSettings from '../screens/AppearanceSettings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTabs = createMaterialBottomTabNavigator();

const SettingsTabs = () => {
  return (
    <BottomTabs.Navigator initialRouteName="GeneralSettings" shifting={true}>
      <BottomTabs.Screen
        name="GeneralSettings"
        component={GeneralSettings}
        options={{
          tabBarLabel: 'General Settings',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={`settings${focused ? '' : '-outline'}`}
              color={color}
              size={26}
            />
          ),
          tabBarColor: 'tomato',
        }}
      />
      <BottomTabs.Screen
        name="AppearanceSettings"
        component={AppearanceSettings}
        options={{
          tabBarLabel: 'Appearance',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={`palette${focused ? '' : '-outline'}`}
              color={color}
              size={26}
            />
          ),
          tabBarColor: 'purple',
          tabBarBadge: 2,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default SettingsTabs;
