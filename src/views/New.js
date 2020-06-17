import React, { useState, useContext } from 'react';

import { CreateWheel } from '../components/createWheel.js';
import { StoryCreateTracker } from '../components/storyCreateTracker.js';

import { Context as NewStoryContext } from '../providers/newStoryProvider.js';

import styled from 'styled-components';

const Container = styled.section`
  position: 'fixed';
  width: 500px;
  height: calc(100vh - 60px);
  z-index: 7;
  background-color: white;
  overflow-y: hidden;
`;

const Overlay = styled.div`
  z-index: 6;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255,255,255, 0.7);
`;

export const New = () => {
  const { state } = useContext(NewStoryContext);
  const [formData, setFormData] = useState({});
  const [isBlurred, setIsBlurred] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <Container className='noBar'>
        <CreateWheel
          formData={formData}
          setFormData={data => setFormData(data)}
          setIsBlurred={() => setIsBlurred(false)}
          handleSubmit={handleSubmit}
        />
      </Container>
      <StoryCreateTracker formData={formData} />
      {isBlurred && <Overlay />}
    </>
  )
}