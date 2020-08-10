import createDataContext from './createDataContext.js';
// import * as useFetch from './../hooks/useFetch';
import { useFetch } from './../hooks/useFetch.js';
import { storyUrl } from '../constants/network.js';

const storyReducer = (state, action) => {
  switch (action.type) {
    case 'set_channel':
      return { ...state, channel: action.payload };
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
            pitch: action.payload.pitch,
            channel: action.payload.channel,
            startLocation: action.payload.startLocation,
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
    case 'add_error':
      return { ...state, error: action.payload };
    case 'remove_error':
      return { ...state, error: null };
    default:
      return state;
  }
};

const setChannel = dispatch => channel => {
  dispatch({ type: 'set_channel', payload: channel });
}

const setFocusedStoryId = dispatch => storyId => {
  dispatch({ type: 'set_focused_story', payload: storyId });
}

const fetchStories = dispatch => async city => {
  try {
    const response = await useFetch(`${storyUrl}?city=${city}`, 'GET', null);
    if (response.status !== 'success') return dispatch({ type: 'add_error', payload: response.payload });
    dispatch({ type: 'fetch_stories', payload: response.payload });
  } catch (error) {
    console.log(error);
  }
}

const addStory = dispatch => async story => {
  const response = await useFetch(storyUrl, 'POST', story);
  if (response.status === 'failure') return dispatch({ type: 'add_error', payload: response.payload });
  dispatch({ type: 'add_story', payload: { ...story, _id: response.payload } });
}

const editStory = dispatch => (id, title, description, channel, body, callback) => {
  dispatch({ type: 'edit_story', payload: { id, title, description, channel, body } });
  callback();
}

const deleteStory = dispatch => id => {
  dispatch({ type: 'delete_story', payload: id });
}

export const { Context, Provider } = createDataContext(
  storyReducer,
  { setChannel, setFocusedStoryId, fetchStories, addStory, editStory, deleteStory },
  {
    channel: 'All',
    focusedStoryId: null,
    error: null,
    stories: null
  }
);