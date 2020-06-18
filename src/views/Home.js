import React, { useContext } from 'react';
import { Context as StoryContext } from '../providers/storyProvider.js';

import { Filter } from '../components/filter.js';
import { Pitch } from '../components/pitch.js';

import styled from 'styled-components';

const Container = styled.section`
  background: white;
  width: 500px;
  height: 100vh;
`;

const More = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreButton = styled.button`
  background-color: var(--color);
  height: 45px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 20px;
`;

export const Home = () => {
  const { state } = useContext(StoryContext);

  const fetchStories = () => {
    console.log('hello')
  }

  return (
    <Container className='noBar'>
      <Filter setGenre={item => console.log(item)} />
      {state.map((item, idx) => (
        <Pitch
          key={item._id}
          index={idx + 1}
          title={item.title}
          genre={item.genre}
          pitch={item.pitch}
          createdAt={item.createdAt}
          author={item.author}
        />
      ))}
      <More>
        <MoreButton onClick={fetchStories}>See more results</MoreButton>
      </More>
    </Container>
  )
}