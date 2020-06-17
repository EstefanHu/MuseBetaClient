import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa'
import { TiCancel } from 'react-icons/ti';

const Section = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 500px;
  height: auto;
  width: 200px;
  z-index: 9;
  padding: 30px 15px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Span = styled.span`
  display: flex;
  align-items: center;

  & > a {
    text-decoration: none;
  }
`;

const H2 = styled.h2`
  color: grey;
  font-size: 1.2rem;

  &:hover {
    color: black;
  }
`;

export const StoryCreateTracker = ({ formData }) => {


  return (
    <Section>
      <Phase link='createTitle' label='Title' />
      <Phase link='createGenre' label='Genre' />
      <Phase link='createPitch' label='Pitch' />
      <Phase link='createCoords' label='Coords' />
      <Phase link='createBody' label='Body' />
      <Phase link='createPublish' label='Publish' />
    </Section>
  )
}

const Phase = ({ link, label, isComplete, hasError }) => {
  return (
    <Span>
      <a
        href={`#${link}`} >
        <H2>{label}</H2>
      </a>
      {
        isComplete &&
        <FaCheck
          style={{ marginLeft: '8px' }}
          color='green'
          size='16'
        />
      }
      {
        hasError &&
        <TiCancel
          style={{ marginLeft: '8px' }}
          color='red'
          size='23'
        />
      }
    </Span>
  )
}