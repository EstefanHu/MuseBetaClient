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
  min-height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 60px 0;
`;

const Card = styled.div`
  width: 100%;
  height: fit-content;
  padding: 30px 40px;
  background-color: white;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: grey;
`;

const Input = styled.input`
  width: 100%;
  height: 55px;
  padding: 12px 10px;
  outline: 0;
  font-size: 1.2rem;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
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
  margin-bottom: 20px;
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

export const CreateStoryForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!genre) return alert('No Genre pro0vided');

    console.log('submitted: ' + genre);
  }

  return (
    <Scroller className='noBar'>
      <Form onSubmit={handleSubmit}>
        <Screen>
          <Card>
            <Header>Create Story Pitch</Header>
            <Label>Title:</Label>
            <Input
              placeholder='Enter a Title...'
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            <Label>Genre:</Label>
            <Select
              type='text'
              value={genre}
              onChange={e => setGenre(e.currentTarget.value)}
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
            <Label>Description:</Label>
            <Textarea
              placeholder='Enter a Description...'
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
            <NextButton href='#plot'>Next</NextButton>
            <input type='submit' />
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