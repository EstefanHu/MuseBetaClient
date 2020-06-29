import createDataContext from './createDataContext.js';
import { API } from '../constants/network.js';

const profileReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export const {Context, Provider} = createDataContext(
  profileReducer,
  {},
  {}
);