import { API } from '../constants/api.js'

export const getApiKey = setKey => {
  let key = sessionStorage.getItem('key');

  if (key === null)
    fetch(API + 'auth/mapKey', {
      credentials: 'include'
    }).then(res => res.json())
      .then(res => {
        sessionStorage.setItem('key', res.key);
        key = res.key;
      })
      .catch(console.error);

  setKey(key)
}