import React, { useState } from 'react';
import styled from 'styled-components';

const Article = styled.article`
  position: absolute;
  bottom: 0;
  left: 550px;
  height: auto;
  width: 250px;
  z-index: 9;
  padding: 30px 20px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;

  & > a {
    text-decoration: none;
  }
`;

const H2 = styled.h2`
  color: grey;
  font-size: 1.4rem;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

export const StoryCreateTracker = ({ formData }) => {


  return (
    <Article>
      <a href='#createTitle'>
        {/* <H2>{formData.title}</H2> */}
        <H2>Hello World</H2>
        <H2>Non-Fiction</H2>
      </a>
      <a href='#createGenre'>
        <H2>{formData.genre}</H2>
      </a>
      <a href='#createPitch'>
        <H2>{formData.pitch}</H2>
      </a>
      <a href='#createCoordinates'>
        <H2>{formData.coordinates}</H2>
      </a>
      <a href='#createBody'>
        <H2>{formData.body}</H2>
      </a>
    </Article>
  )
}