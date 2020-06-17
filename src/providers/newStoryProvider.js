import createDataContext from './createDataContext.js';

const newStoryReducer = (state, action) => {
  switch (action.type) {
    case 'add_title':
      return { ...state, title: action.payload.title };
    case 'add_genre':
      return { ...state, genre: action.payload.genre };
    case 'add_pitch':
      return { ...state, pitch: action.payload.pitch };
    case 'add_coordinates':
      return { ...state, coordinates: action.payload.coordinates };
    case 'add_body':
      return { ...state, body: action.payload.body };
    case 'add_error':
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

const startStory = dispatch => () => {
  dispatch({type: 'start_story', payload: { msg: 'inProgress' }});
}

const addTitle = dispatch => title => {
  let error;
  dispatch({ type: 'add_title', payload: { title, error } });
}

const addGenre = dispatch => genre => {
  dispatch({ type: 'add_genre', payload: genre });
}

const addPitch = dispatch => pitch => {
  dispatch({ type: 'add_pitch', payload: pitch });
}

const addCoordinates = dispatch => coordinates => {
  let lng = coordinates[0];
  let lat = coordinates[1];
  dispatch({ type: 'add_coordinates', payload: { lng, lat } });
}

const addBody = dispatch => body => {
  dispatch({ type: 'add_body', payload: body });
}

export const { Context, Provider } = createDataContext(
  newStoryReducer,
  { startStory, addTitle, addGenre, addPitch, addCoordinates, addBody },
  {
    status: null,
    error: null,
  }
);