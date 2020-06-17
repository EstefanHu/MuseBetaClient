import React, { useState } from 'react';
import { GENRES } from '../constants/genre.js';

import styled from 'styled-components';

const Container = styled.section`
  width: 600px;
  height: calc(100vh - 60px);
  z-index: 7;
  background-color: white;
`;

const Overlay = styled.div`
  z-index: 6;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255,255,255, 0.7);
`;

export const New = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted');
  }

  return (
    <>
      <Container>
        <CreateWheel
          formData={formData}
          setFormData={data => setFormData(data)}
        />
      </Container>
      {!formData.coordinates && <Overlay />}
    </>
  )
}

const Wheel = styled.section`
  width: 100%;
  margin: 0 auto;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

const Screen = styled.article`
  min-height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
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

const CreateWheel = ({ formData, setFormData }) => {
  return (
    <Wheel className='noBar'>
      <form>

        <Screen id='createTitle'>
          <H1>Add a Title.</H1>
          <Input
            placeholder='Enter a Title...'
            value={formData.title}
            onChange={e => setFormData({ title: e.target.value })}
            required
          />
          <NextButton href='#createGenre'>Next</NextButton>
        </Screen>

        <Screen id='createGenre'>
          <H1>Choose a Genre.</H1>
          <Select
            type='text'
            value={formData.genre}
            onChange={e => setFormData({ genre: e.currentTarget.value })}
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
          <NextButton href='#createDescription'>Next</NextButton>
        </Screen>

        <Screen id='createDescription'>
          <H1>Write a Description.</H1>
          <Textarea
            placeholder='Enter a Description...'
            value={formData.description}
            onChange={e => setFormData({ descriptin: e.target.value })}
            required
          />
          <NextButton href='#createCoords'>Next</NextButton>
        </Screen>

        <Screen id='createCoords'>
          <H1>Plot Coordinates</H1>
          <NextButton href='#createBody'>Next</NextButton>
        </Screen>

        <Screen id='createBody'>
          <H1>Write Content.</H1>
          <Textarea
            placeholder='Enter body of work...'
            value={formData.body}
            onChange={e => setFormData({ body: e.target.value })}
            required
          />
          <NextButton href='#createPublish'>Next</NextButton>
        </Screen>

        <Screen id='createPublish'>
          <H1>Well Done!</H1>
          <Submit type='submit' value='Publish' />
        </Screen>

      </form>
    </Wheel>
  )
}