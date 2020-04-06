import React from 'react';
import {PureDarkModeButton} from '../src/components/DarkModeButton';
import {render} from '@testing-library/react-native';
// import {fireEvent} from '@testing-library/react-native';

const buttonTextId = 'button-text';
const title = 'title';
const callback = jest.fn();

describe('DarkModeButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByTestId} = render(
      <PureDarkModeButton
        isDarkMode={false}
        dispatch={callback}
        text={title}
      />,
    );
    expect(getByTestId(buttonTextId).props.children).toBe(title);
  });

  // //Issue: react-native-gesture-handler does not seem to
  // //       work well with fireEvent()
  // //See: https://github.com/testing-library/native-testing-library/issues/107
  // it('activates upon click', () => {
  //   const {getByLabelText} = render(
  //     <PureDarkModeButton
  //       isDarkMode={false}
  //       dispatch={callback}
  //       text={title}
  //     />,
  //   );
  //   fireEvent.press(getByLabelText(title));

  //   expect(callback).toBeCalledTimes(1);
  // });
});