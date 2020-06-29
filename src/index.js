import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

import { Provider as LocationProvider } from './providers/locationProvider.js';
import { Provider as StoryProvider } from './providers/storyProvider.js';
import { Provider as NewStoryProvider } from './providers/newStoryProvider.js';
import { Provider as ProfileProvider } from './providers/profileProvider.js';

ReactDOM.render(
  <LocationProvider>
    <StoryProvider>
      <NewStoryProvider>
        <ProfileProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProfileProvider>
      </NewStoryProvider>
    </StoryProvider>
  </LocationProvider>,
  document.getElementById('root')
);