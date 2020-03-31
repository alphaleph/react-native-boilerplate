import 'react-native-gesture-handler';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import Store from './src/redux/Store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainDrawer from './src/navigators/MainDrawer';
import FullModal from './src/screens/FullModal';

// declare var global: {HermesInternal: null | {}};

export type RootStackParamList = {
  FullModal: undefined;
};

const RootStack = createStackNavigator();

const App = () => {
  return (
    <ReduxProvider store={Store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator mode="modal">
            <RootStack.Screen
              name="MainDrawer"
              component={MainDrawer}
              options={{headerShown: false}}
            />
            <RootStack.Screen name="FullModal" component={FullModal} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
