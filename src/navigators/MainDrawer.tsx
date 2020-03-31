import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import SettingsTabs from './SettingsTabs';
import MainStack, {MainStackParamList} from './MainStack';

export type DrawerStackProp = DrawerNavigationProp<MainStackParamList>;

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainStack"
        component={MainStack}
        options={{drawerLabel: 'Home Stack'}}
      />
      <Drawer.Screen
        name="SettingsTabs"
        component={SettingsTabs}
        options={{drawerLabel: 'Settings Tabs'}}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
