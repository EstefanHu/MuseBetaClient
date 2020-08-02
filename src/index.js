import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

import { Provider as AuthProvider } from './providers/authProvider.js';
import { Provider as LocationProvider } from './providers/locationProvider.js';
import { Provider as StoryProvider } from './providers/storyProvider.js';
import { Provider as NewStoryProvider } from './providers/newStoryProvider.js';
import { Provider as ProfileProvider } from './providers/profileProvider.js';
import { Provider as RefProvider } from './providers/refProvider.js';

ReactDOM.render(
  <AuthProvider>
    <LocationProvider>
      <StoryProvider>
        <NewStoryProvider>
          <ProfileProvider>
            <RefProvider>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </RefProvider>
          </ProfileProvider>
        </NewStoryProvider>
      </StoryProvider>
    </LocationProvider>
  </AuthProvider>,
  document.getElementById('root')
);