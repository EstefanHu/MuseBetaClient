import React from 'react';

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
  const fetchStories = () => {
    console.log('hello')
  }

  return (
    <Container className='noBar'>
      <Filter setGenre={item => console.log(item)} />
      <Pitch
        index={1}
        title='Hello World'
        description={'ndustrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the.'}
        genre={'Fiction'}
        createdAt={'October 17, 2019'}
        author={'Estefan Hu'}
      />
      <More>
        <MoreButton onClick={fetchStories}>See more results</MoreButton>
      </More>
    </Container>
  )
}