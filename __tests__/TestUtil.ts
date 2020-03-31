import {BaseAction} from '../src/redux/Types';

export const defaultDispatch = (action: BaseAction) => {
  console.log(action);
};

export const defaultText = 'Hello World!';
