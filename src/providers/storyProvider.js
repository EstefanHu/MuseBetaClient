import createDataProvider from './createDataProvider.js'

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

const addStory = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_story', payload: { title, content } });
    callback();
  }
};

const editStory = dispatch => {
  return (id, title, description, genre, body, callback) => {
    dispatch({ type: 'edit_story', payload: { id, title, description, genre, body } });
    callback();
  }
};

const deleteStory = dispatch => {
  return id => {
    dispatch({ type: 'delete_story', payload: id });
  }
}

export const { Context, Provider } = createDataProvider(
  storyReducer,
  { addStory, editStory, deleteStory },
  []
);