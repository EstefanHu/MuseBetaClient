import createDataContext from './createDataContext.js';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'register':
      return { errorMessage: '', token: action.payload };
    case 'login':
      return { errorMessage: '', token: action.payload };
    case 'logout':
      return { ...state, errorMessage: '', token: '' };
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
};

const login = dispatch => async ({ email, password }) => {
  try {
    const response = await authApi.post('/signup', { email, password });
    await localStorage.setItem('token', response.data.token);
    dispatch({ type: 'register', payload: response.data.token });
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
  }
};

const register = dispatch => async ({ email, password }) => {
  try {
    const response = await authApi.post('/signin', { email, password });
    await localStorage.setItem('token', response.data.token);
    dispatch({ type: 'login', payload: response.data.token });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await localStorage.getItem('token');
  if (token) dispatch({ type: 'login', payload: token });
};

const signout = dispatch => async () => {
  await localStorage.removeItem('token');
  dispatch({ type: 'logout' });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { login, register, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);