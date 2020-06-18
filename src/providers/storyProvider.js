import createDataContext from './createDataContext.js';
import { API } from '../constants/api.js';

const storyReducer = (state, action) => {
  switch (action.type) {
    case 'add_story':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          description: action.payload.description,
          genre: action.payload.genre,
          coordinates: [action.payload.longitude, action.payload.latitude],
          body: action.payload.body
        }
      ];
    case 'edit_story':
      return state.map(story => {
        return story.id === action.payload.id
          ? action.payload
          : story;
      });
    case 'delete_story':
      return state.filter(story => story.id !== action.payload);
    default:
      return state;
  }
};

const addStory = dispatch => async (state, callback) => {
  console.log('Adding Story: ' + state);
  const response = await fetch(API + '/story/create', {
    credentials: 'include',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(state)
  });
  const data = JSON.parse(response);
  console.log(data);
  dispatch({ type: 'add_story', payload: { ...state, _id: data._id } });
  callback();
}

const editStory = dispatch => (id, title, description, genre, body, callback) => {
  dispatch({ type: 'edit_story', payload: { id, title, description, genre, body } });
  callback();
}

const deleteStory = dispatch => id => {
  dispatch({ type: 'delete_story', payload: id });
}

export const { Context, Provider } = createDataContext(
  storyReducer,
  { addStory, editStory, deleteStory },
  []
);