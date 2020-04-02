import React from 'react';
import {PureDarkModeButton} from '../src/components/DarkModeButton';
import {render, fireEvent} from '@testing-library/react-native';

const title = 'title';
const callback = jest.fn();
jest.mock('react-native-gesture-handler', () => {});

describe('DarkModeButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByText} = render(
      <PureDarkModeButton
        isDarkMode={false}
        dispatch={callback}
        text={title}
      />,
    );
    expect(getByText(title).props.children).toBe(title);
  });

  it('activates open click', () => {
    const {getByText} = render(
      <PureDarkModeButton
        isDarkMode={false}
        dispatch={callback}
        text={title}
      />,
    );
    fireEvent.press(getByText(title));

    expect(callback).toBeCalledTimes(1);
  });
});
