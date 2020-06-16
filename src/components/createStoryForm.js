import React, { useState } from 'react';
import styled from 'styled-components';
import { GENRES } from '../constants/genre.js';

import Select from 'react-select';

const Scroller = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

const Form = styled.form`
  width: 700px;
  margin: 0 auto;
`;

const Screen = styled.article`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  height: fit-content;
  padding: 30px 40px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 10px lightgrey;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 2rem;

`;

const Label = styled.label`
  font-size: 1.2rem;
  color: grey;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  outline: 0;
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const NextButton = styled.a`
  background-color: var(--color);
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 15px;
  text-decoration: none;
`;

export const CreateStoryForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    console.log('submitted');
  }

  return (
    <Scroller className='noBar'>
      <Form onSubmit={handleSubmit}>
        <Screen>
          <Card>
            <Header>Create your Pitch</Header>
            <Label>Title:</Label>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Label>Description:</Label>
            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <Select
              options={GENRES}
              isSearchable={true}
              isClearable={true}
            />
            <NextButton href='#plot'>Next</NextButton>
          </Card>
        </Screen>
        {/* <Screen id='plot'>
        </Screen>
        <Screen>

        </Screen> */}
      </Form>
    </Scroller>
  )
}