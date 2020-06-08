import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { App } from './App';

import { Provider as StoryProvider } from './providers/storyProvider.js';

ReactDOM.render(
  <StoryProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoryProvider>,
  document.getElementById('root')
);