const API = 'http://192.168.1.5:4000';

const loginUrl = API + '/api/v1/user/login';
const registerUrl = API + '/api/v1/user/register';
const profileUrl = API + '/api/v1/user/me';
const updateMeUrl = API + '/api/v1/user/updateMe';
const getProfileImage = API + '/api/static/img/users';
const getLibrary = API + '/api/v1/story/library';
const addStoryToLibrary = API + '/api/v1/user/addStoryToLibrary';
const removeStoryFromLibrary = API + '/api/v1/user/removeStoryFromLibrary';
const storyUrl = API + '/api/v1/story';

export {
  API,
  loginUrl,
  registerUrl,
  profileUrl,
  updateMeUrl,
  getProfileImage,
  getLibrary,
  addStoryToLibrary,
  removeStoryFromLibrary,
  storyUrl
};