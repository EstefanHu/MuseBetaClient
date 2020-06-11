import createDataContext from './createDataContext.js';

const LocationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const approximateLocation = dispatch => () => {
  dispatch({ type: 'approximate_location' });
}

export const { Provider, Context } = createDataContext(
  LocationReducer,
  { approximateLocation },
  {}
)