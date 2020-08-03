import createDataContext from './createDataContext.js';

const refProvider = (state, action) => {
  switch (action.type) {
    case 'set_viewport':
      return { ...state, viewport: action.payload };
    case 'set_map_ref':
      return { ...state, mapRef: action.payload };
    default:
      return state;
  };
};

const setViewport = dispatch => viewport =>
  dispatch({ type: 'set_viewport', payload: viewport });

const setMapRef = dispatch => ref =>
  dispatch({ type: 'set_map_ref', payload: ref });

export const { Provider, Context } = createDataContext(
  refProvider,
  {
    setViewport,
    setMapRef,
  },
  {
    viewport: {},
    mapRef: null,
  }
);