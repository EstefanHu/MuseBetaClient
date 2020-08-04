import createDataContext from './createDataContext.js';
import { useFetch } from '../hooks/useFetch.js';
import { storyUrl, profileUrl, updateMeUrl } from '../constants/network.js';

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
    case 'upload_profile_photo':
      return { ...state, photo: action.payload };
    case 'fetch_stories':
      return { ...state, stories: action.payload };
    default:
      return state;
  };
};

const getMe = dispatch => async () => {
  try {
    const response = await useFetch(profileUrl, 'GET', null);
    if (response.status !== 'success')
      return dispatch({ type: 'add_error', payload: response.payload });

    dispatch({ type: 'get_me', payload: response.payload });
  } catch (error) {
    console.log(error);
  };
};

const uploadProfilePhoto = dispatch => async photo => {
  try {
    let localUri = photo;
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();
    formData.append('photo', { uri: localUri, name: filename, type });

    const response = await useFetch(updateMeUrl, 'PATCH', formData);
    if (response.status !== 'success')
      return dispatch({ type: 'add_error', payload: response.payload });
    dispatch({ type: 'upload_profile_photo', payload: response.payload.photo });
  } catch (error) {
    console.log(error);
  };
};

const updateProfile = dispatch => async body => {
  try {
    const response = await useFetch(updateMeUrl, 'PATCH', body);
    if (response.status !== 'success')
      return dispatch({ type: 'add_error', paylaod: response.payload });
    dispatch({ type: 'get_me', payload: response.payload });
  } catch (error) {
    console.log(error);
  };
};

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
    uploadProfilePhoto,
    updateProfile,
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