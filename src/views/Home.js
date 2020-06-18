import React, { useEffect, useContext, useState } from 'react';
import { Context as StoryContext } from '../providers/storyProvider.js';

import { Filter } from '../components/filter.js';
import { Pitch } from '../components/pitch.js';
import { Loading } from '../components/loading.js';

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
  flex-direction: column;
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
  const { state, fetchStories } = useContext(StoryContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStories('Seattle', () => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreStories = () => {
    setIsLoading(true);
    console.log('hello')
  }

  return (
    <Container>
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
        {
          isLoading ?
            <Loading />
            : <MoreButton
              onClick={fetchMoreStories}
            >See more results</MoreButton>
        }
      </More>
    </Container>
  )
}