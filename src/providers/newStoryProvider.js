import createDataContext from './createDataContext.js';

const newStoryReducer = (state, action) => {
  switch (action.type) {
    case 'update_story':
      return { ...state, status: action.payload.msg };
    case 'add_title':
      return { ...state, title: action.payload };
    case 'add_genre':
      return { ...state, genre: action.payload };
    case 'add_pitch':
      return { ...state, pitch: action.payload };
    case 'add_coordinates':
      return { ...state, coordinates: action.payload };
    case 'add_body':
      return { ...state, body: action.payload };
    case 'add_error':
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

const startStory = dispatch => () => {
  console.log('Provider starting story');
  dispatch({ type: 'update_story', payload: { msg: 'inProgress' } });
}

const endStory = dispatch => () => {
  console.log('Provider ending story');
  dispatch({ type: 'update_story', payload: { msg: 'inactive' } });
}

const addTitle = dispatch => title => {
  dispatch({ type: 'add_title', payload: title });
}

const addGenre = dispatch => genre => {
  dispatch({ type: 'add_genre', payload: genre });
}

const addPitch = dispatch => pitch => {
  dispatch({ type: 'add_pitch', payload: pitch });
}

const addCoordinates = dispatch => coordinates => {
  console.log('PROVIDER_LOG: ' + coordinates);
  let lng = coordinates[0];
  let lat = coordinates[1];
  dispatch({ type: 'add_coordinates', payload: [lng, lat] });
}

const addBody = dispatch => body => {
  dispatch({ type: 'add_body', payload: body });
}

export const { Context, Provider } = createDataContext(
  newStoryReducer,
  { startStory, endStory, addTitle, addGenre, addPitch, addCoordinates, addBody },
  {
    status: 'inactive',
    error: null,
  }
);