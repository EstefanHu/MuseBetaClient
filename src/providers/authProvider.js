import createDataContext from './createDataContext.js';

const AuthReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const { Context, Provider } = createDataContext(
  AuthReducer,
  {},
  { cookie: null, errorMessage: '' }
);