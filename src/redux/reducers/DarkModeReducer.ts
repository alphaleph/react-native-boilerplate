import {DARK_MODE_ON, DARK_MODE_OFF} from '../Constants';
import {BaseAction} from '..//Types';

export interface DarkModeState {
  darkMode: {
    isDarkMode: boolean;
  };
}

const initialState = {
  isDarkMode: false,
};

const DarkModeReducer = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case DARK_MODE_ON:
      return {
        ...state,
        isDarkMode: true,
      };
    case DARK_MODE_OFF:
      return {
        ...state,
        isDarkMode: false,
      };
    default:
      return state;
  }
};

export default DarkModeReducer;
