import { API } from '../constants/network.js';

exports.login = async (email, password) => {
  fetch(API + '/api/v1/user/login', {
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
      if (res.status !== 'success') return alert(res.payload);
      localStorage.setItem('token', res.token);
    })
    .catch(console.error);
};

exports.register = async (firstName, lastName, email, password, confirmPassword) => {
  if (password.length < 8) return alert('Password is not long enough');
  if (password !== confirmPassword) return alert('Passwords do not match');

  fetch(API + '/api/v1/user/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `${firstName} ${lastName}`,
      email,
      password,
      confirmPassword
    })
  })
    .then(res => res.json())
    .then(res => {
      if (res.status !== 'success') return alert(res.payload);
      localStorage.setItem('token', res.token);
    })
    .catch(console.error);
}