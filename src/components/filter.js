import React from 'react';
import { GENRES } from '../constants/genre.js';
import styled from 'styled-components';

const Span = styled.span`
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

  &:hover {
    background: rgb(237,237,237);
  }
`;

export const Filter = ({ setGenre }) => (
  <Span className='noBar'>
    <Button onClick={() => setGenre('All')}>All</Button>
    {GENRES.map(item => (
      <Button key={item.value} onClick={() => setGenre(item.value)}>{item.value}</Button>
    ))}
  </Span>
)