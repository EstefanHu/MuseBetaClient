import React from 'react';

import styled from 'styled-components';

const Wheel = styled.section`
  width: 700px;
  margin: 0 auto;
  height: calc(100vh - 60px);
  overflow-y: auto;
  z-index: 9;
`;

const Screen = styled.article`
  min-height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 60px 0;
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
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

export const CreateWheel = ({ formData, setFormData }) => {
  return (
    <Wheel className='noBar'>
      <form>

        <Screen>
          <H1>Add a Title.</H1>
          <Input
            placeholder='Enter a Title...'
            value={formData.title}
            onChange={e => setFormData({ title: e.target.value })}
            required
          />
        </Screen>

        <Screen>
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
        </Screen>

        <Screen>
          <H1>Write a Description.</H1>
          <Textarea
            placeholder='Enter a Description...'
            value={formData.description}
            onChange={e => setFormData({ descriptin: e.target.value })}
            required
          />
        </Screen>

      </form>
    </Wheel>
  )
}