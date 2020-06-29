import createDataContext from './createDataContext.js';

const authReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'sign_up', payload: response.data.token });
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'sign_in', payload: response.data.token });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) dispatch({ type: 'sign_in', payload: token });
}

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'sign_out' });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);