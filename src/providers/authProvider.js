import createDataContext from './createDataContext.js';
import { useFetch } from './../hooks/useFetch.js';
import { loginUrl, registerUrl } from './../constants/network.js';

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

const login = dispatch => async ({payload, callback}) => {
  try {
    const response = await useFetch(loginUrl, 'POST', payload);
    await localStorage.setItem('token', response.token);
    dispatch({ type: 'register', payload: response.token });
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
  }
};

const register = dispatch => async ({ firstName, lastName, email, password, confirmPassword }) => {
  try {
    if (password.length < 8) return alert('Password is not long enough');
    if (password !== confirmPassword) return alert('Passwords do not match');

    const response = await useFetch(registerUrl, 'POST', { firstName, lastName, email, password, confirmPassword });
    await localStorage.setItem('token', response.token);
    dispatch({ type: 'login', payload: response.token });
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