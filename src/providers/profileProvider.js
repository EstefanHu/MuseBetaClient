import createDataContext from './createDataContext.js';
import { useFetch } from '../hooks/useFetch.js';
import { storyUrl, profileUrl } from '../constants/network.js';

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'get_me':
      return {
        ...state,
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        links: action.payload.links,
        libraryIds: action.payload.library,
        credibility: action.payload.credibility,
        role: action.payload.role,
        type: action.payload.type,
        photo: action.payload.photo,
        bio: action.payload.bio,
      }
    case 'fetch_stories':
      return { ...state, stories: action.payload };
    default:
      return state;
  }
};

const getMe = dispatch => async () => {
  try {
    const response = await useFetch(profileUrl, 'GET', null);
    if (response.status !== 'success')
      return dispatch({ type: 'add_error', payload: response.payload });

    dispatch({ type: 'get_me', payload: response.payload });
  } catch (error) {
    console.log(error);
  }
}

const fetchStories = dispatch => async authorId => {
  try {
    const response = await useFetch(storyUrl + `?authorId=${authorId}`, 'GET', null);
    if (response.status !== 'success')
      return dispatch({ type: 'add_error', payload: response.payload });

    dispatch({ type: 'fetch_stories', payload: response.payload });
  } catch (error) {
    console.log(error);
  };
};

export const { Context, Provider } = createDataContext(
  profileReducer,
  {
    getMe,
    fetchStories,
  },
  {
    id: null,
    name: null,
    email: null,
    role: null,
    type: null,
    links: [],
    libraryIds: [],
    library: [],
    stories: null,
    credibility: null,
    photo: null,
    bio: null,
  }
);