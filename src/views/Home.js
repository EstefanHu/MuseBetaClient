import React, { useEffect, useContext, useState } from 'react';
import { CHANNELS } from './../constants/channel.js';
import { Context as StoryContext } from './../providers/storyProvider.js';

import { Intro } from './../components/intro.js';
import { Loading } from './../components/loading.js';

import styled from 'styled-components';

const Container = styled.section`
  background: white;
  width: 500px;
  overflow-y: scroll;
  padding-bottom: 20px;
`;

const Filter = styled.span`
  display: block;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
  border: 8px solid white;
`;

const Button = styled.button`
  display: inline-block;
  border: 1px solid lightgrey;
  border-radius: 15px;
  background: rgb(245,245,245);
  font-size: 0.8rem;
  font-weight: bold;
  padding: 6px 12px;
  cursor: pointer;
  margin: 0 5px;
  outline: 0;

  &:hover {
    background: rgb(237,237,237);
  }
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
  const { state: { channel, stories }, setChannel, fetchStories } = useContext(StoryContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStories('Seattle', () => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreStories = () => {
    setIsLoading(true);
  }

  return (
    <Container className='noBar'>
      <Filter className='noBar'>
        <Button onClick={() => setChannel('All')}>All</Button>
        {
          CHANNELS.map(item => (
            <Button
              key={item.value}
              onClick={() => setChannel(item.value)}
            >{item.value}</Button>
          ))
        }
      </Filter>
      {
        stories.map(item => {
          if (channel === 'All' || channel === item.channel)
            return <Intro
              key={item._id}
              _id={item._id}
              title={item.title}
              channel={item.channel}
              pitch={item.pitch}
              createdAt={item.createdAt}
              authorName={item.authorName}
            />
          return null;
        })
      }
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