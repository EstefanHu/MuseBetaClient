import createDataContext from './createDataContext.js';

const refProvider = (state, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export const { Context, Provider } = createDataContext(
  refProvider,
  {},
  {}
);