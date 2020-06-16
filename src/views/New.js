import React from 'react';

import { StoryCreateTracker } from '../components/storyCreateTracker.js';

import styled from 'styled-components';

const Overlay = styled.div`
  z-index: 8;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255,255,255, 0.7);
`;

export const New = () => {
  return (
    <Overlay>
      <StoryCreateTracker />
    </Overlay>
  )
}