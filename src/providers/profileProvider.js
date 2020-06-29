import createDataContext from './createDataContext.js';
import { API } from '../constants/api.js';

const profileReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const login = async dispatch => () => {

}

export const {Context, Provider} = createDataContext(
  profileReducer,
  {login},
  {
    token: null
  }
);