import { API } from '../constants/api.js';

export const getCommunityStories = (community, page) => {
  fetch(API + `/story/${community}?page=${page}`)
    .then(res => res.json())
    .then(res => {return res})
    .catch(console.error);
}