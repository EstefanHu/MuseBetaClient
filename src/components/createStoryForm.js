import React, { useState } from 'react';
import styled from 'styled-components';
import { GENRES } from '../constants/genre.js';

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
  overflow: hidden;
  box-shadow: 2px 2px 10px lightgrey;

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

const NextButton = styled.button`
  width: 100px;
  height: 55px;
  background-color: var(--color);
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
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
            {/* <a href='#plot'>
              <NextButton type='button' value='Next' />
            </a> */}
          </Card>
        </Screen>
        <Screen id='plot'>
        </Screen>
        <Screen>

        </Screen>
      </Form>
    </Scroller>
  )
}