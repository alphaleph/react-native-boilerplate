import React, {useState} from 'react';

import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../navigators/MainStack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import DrawerButton from '../components/DrawerButton';
import DarkModeButton from '../components/DarkModeButton';
import Config from 'react-native-config';

type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;
type Props = {navigation: HomeScreenNavigationProp};

const Home = ({navigation}: Props) => {
  const [count, setCount] = useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <DrawerButton />,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View>
          <Button
            title="Go to Profile Screen"
            onPress={() => {
              navigation.navigate('Profile', {username: 'User'});
            }}
          />
          <Button
            title={`Increment the Count!: ${count}`}
            onPress={() => {
              setCount(count + 1);
            }}
          />
          <Button
            onPress={() => navigation.navigate('FullModal')}
            title="Open Full Screen Modal"
          />
          <Text>{Config.API_URL}</Text>
          <DrawerButton />
          <DarkModeButton text="Toggle Dark Mode" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#3234a3',
  },
  body: {
    backgroundColor: '#123212',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
