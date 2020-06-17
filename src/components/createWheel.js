import React from 'react';
import { GENRES } from '../constants/genre.js';

import styled from 'styled-components';

const Screen = styled.article`
  min-height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
`;

const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 55px;
  padding: 12px 10px;
  outline: 0;
  font-size: 1.2rem;
  margin-bottom: 15px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    border-color: grey;
  }

  &:focus {
    border-color: var(--color);
  }
`;

const Textarea = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  padding: 12px 10px;
  outline: 0;
  font-size: 1.2rem;
  margin-bottom: 15px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    border-color: grey;
  }

  &:focus {
    border-color: var(--color);
  }
`;

const Select = styled.select`
  width: 100%;
  height: 55px;
  padding: 12px 10px;
  outline: 0;
  border: 1px solid lightgrey;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  -webkit-appearance:none;

  &:hover {
    border-color: grey;
  }

  &:focus {
    border-color: var(--color);
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
`;

const NextButton = styled.a`
  background-color: var(--color);
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 15px;
  text-decoration: none;
  width: 100px;
  text-align: center;
`;

const BackButton = styled.a`
  color: grey;
  font-size: 1.1rem;
  padding: 10px 15px;
  width: 80px;
  text-align: center;
  text-decoration: none;
`;

const Submit = styled.input`
  width: 150px;
  height: 45px;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background-color: var(--color);
  border: none;
  border-radius: 5px;
`;


export const CreateWheel = ({ formData, setFormData }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted');
  }

  return (
    <form onSubmit={handleSubmit}>

      <Screen id='createTitle'>
        <H1>Add a Title.</H1>
        <Input
          placeholder='Enter a Title...'
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <NextButton href='#createPitch'>Next</NextButton>
      </Screen>

      <Screen id='createGenre'>
        <H1>Choose a Genre.</H1>
        <Select
          type='text'
          value={formData.genre}
          onChange={e => setFormData({ ...formData, genre: e.currentTarget.value })}
          required
        >
          <option
            value=''
            style={{ color: 'grey', background: '#fff' }}
          >Select a Genre...</option>
          {GENRES.map(item => (
            <option
              key={item.value}
              value={item.value}
            >{item.label}</option>
          ))}
        </Select>
        <Span>
          <NextButton href='#createPitch'>Next</NextButton>
          <BackButton href='#createTitle'>Back</BackButton>
        </Span>
      </Screen>

      <Screen id='createPitch'>
        <H1>Pitch the Work.</H1>
        <Textarea
          placeholder='Enter a Pitch...'
          value={formData.pitch}
          onChange={e => setFormData({ ...formData, pitch: e.target.value })}
          required
        />
        <Span>
          <NextButton href='#createCoords'>Next</NextButton>
          <BackButton href='#createGenre'>Back</BackButton>
        </Span>
      </Screen>

      <Screen id='createCoords'>
        <H1>Plot Coordinates.</H1>
        <Span>
          <NextButton href='#createBody'>Next</NextButton>
          <BackButton href='#createPitch'>Back</BackButton>
        </Span>
      </Screen>

      <Screen id='createBody'>
        <H1>Write Content.</H1>
        <Textarea
          placeholder='Enter body of work...'
          value={formData.body}
          onChange={e => setFormData({ ...formData, body: e.target.value })}
          required
        />
        <Span>
          <NextButton href='#createPublish'>Next</NextButton>
          <BackButton href='#createCoords'>Back</BackButton>
        </Span>
      </Screen>

      <Screen id='createPublish'>
        <H1>Well Done!</H1>
        <Span>
          <Submit type='submit' value='Publish' />
          <BackButton href='#createBody'>Back</BackButton>
        </Span>
      </Screen>

    </form>
  )
}