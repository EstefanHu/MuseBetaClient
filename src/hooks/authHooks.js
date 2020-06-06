import { API } from '../constants/api.js';

export const loginUser = (email, password) => {
  fetch(API + 'auth/login', {
    credentials: 'include',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(res => res.json())
    .then(res => {
      if (res.err) return { status: 'failure', payload: res.err };
      return { status: 'success' };
    })
    .catch(console.error);
}

export const registerUser = (firstName, lastName, email, password) => {
  fetch(API + 'auth/register', {
    credentials: 'include',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    })
  })
    .then(res => res.json())
    .then(res => {
      if (res.err) return { status: 'failure', payload: res.err };
      return { status: 'success' };
    })
    .catch(console.error);
}