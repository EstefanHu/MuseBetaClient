import createDataContext from './createDataContext.js';

const refProvider = (state, action) => {
  switch (action.type) {
    case 'set_map_ref':
      return { ...state, mapRef: action.payload };
    default:
      return state;
  };
};

const setMapRef = dispatch => ref => {
  console.log('mapRef', ref)
  dispatch({ type: 'set_map_ref', payload: ref });
}

export const { Provider, Context } = createDataContext(
  refProvider,
  {
    setMapRef,
  },
  {
    mapRef: null,
  }
);