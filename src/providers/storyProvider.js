import createDataContext from './createDataContext.js';
import { API } from '../constants/api.js';

const storyReducer = (state, action) => {
  switch (action.type) {
    case 'set_genre':
      return { ...state, genre: action.payload };
    case 'set_focused_story':
      return { ...state, focusedStoryId: action.payload }
    case 'fetch_stories':
      return { ...state, stories: action.payload };
    case 'add_story':
      return {
        ...state,
        stories: [
          ...state.stories, {
            id: action.payload._id,
            title: action.payload.title,
            description: action.payload.description,
            genre: action.payload.genre,
            longitude: action.payload.longitude,
            latitude: action.payload.latitude,
            body: action.payload.body
          }
        ]
      };
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

const setGenre = dispatch => genre => {
  dispatch({ type: 'set_genre', payload: genre });
}

const setFocusedStoryId = dispatch => storyId => {
  dispatch({ type: 'set_focused_story', payload: storyId });
}

const fetchStories = dispatch => async (community, callback) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(API + '/story/community/' + community, { Authorization: token });
    const data = await response.json();
    dispatch({ type: 'fetch_stories', payload: data.stories });
    callback();
  } catch (err) {
    console.log(err);
  }
}

// TODO: buggy
const addStory = dispatch => async story => {
  const token = localStorage.getItem('token');
  const response = await fetch(API + '/story/create', {
    Authorization: token,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(story)
  });
  const data = await response.json();
  dispatch({ type: 'add_story', payload: { ...story, _id: data._id } });
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
  { setGenre, setFocusedStoryId, fetchStories, addStory, editStory, deleteStory },
  {
    genre: 'All',
    focusedStoryId: null,
    stories: []
  }
);

// {
//   _id: 'ie4w9gee0rq',
//   title: 'Hello World',
//   genre: 'Non-Fiction',
//   pitch: 'Industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the.',
//   createdAt: 'October 17, 2019',
//   author: 'Estefan Hu'
// }