import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  activateDarkMode,
  deactivateDarkMode,
} from '../redux/actions/DarkModeActions';
import {DarkModeState} from '../redux/reducers/DarkModeReducer';
import {BaseAction} from '../redux/Types';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface DarkModeButtonProps extends DarkModeButtonOwnProps {
  // Redux State
  isDarkMode: boolean;
  // Redux Dispatch
  dispatch: (action: BaseAction) => void;
}

interface DarkModeButtonOwnProps {
  text: string;
}

/*
  Component Structure Note:
    Pure components are separated from Redux-connected versions for testing isolation.
*/
export const PureDarkModeButton = ({
  isDarkMode,
  dispatch,
  text,
}: DarkModeButtonProps) => {
  const toggleDarkMode = () => {
    isDarkMode ? dispatch(deactivateDarkMode()) : dispatch(activateDarkMode());
  };

  return (
    <TouchableOpacity
      style={isDarkMode ? styles.isDark : styles.isLight}
      onPress={toggleDarkMode}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export const DarkModeButton = (props: DarkModeButtonOwnProps) => {
  const isDarkMode = useSelector((state: DarkModeState) => {
    return state.darkMode.isDarkMode;
  });

  const dispatch = useDispatch();

  return (
    <PureDarkModeButton
      {...props}
      isDarkMode={isDarkMode}
      dispatch={dispatch}
    />
  );
};

const styles = StyleSheet.create({
  isDark: {
    backgroundColor: '#000000',
  },
  isLight: {
    backgroundColor: '#FFFFFF',
  },
});

export default DarkModeButton;
