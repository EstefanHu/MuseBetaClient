import createDataContext from './createDataContext.js';
import { API } from '../constants/network.js';

const profileReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const login = async dispatch => () => {

}

const register = async 

export const {Context, Provider} = createDataContext(
  profileReducer,
  {login},
  {
    token: null
  }
);