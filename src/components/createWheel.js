import React, { useState, useContext } from 'react';
import { CHANNELS } from '../constants/channel.js';

import { Context as LocationContext } from '../providers/locationProvider.js';
import { Context as NewStoryContext } from '../providers/newStoryProvider.js';
import { Context as StoryContext } from '../providers/storyProvider.js';

import styled from 'styled-components';
import { withRouter } from 'react-router';

const Container = styled.section`
  position: 'fixed';
  width: 500px;
  height: calc(100vh - 60px);
  z-index: 7;
  background-color: white;
  overflow-y: hidden;
`;

const Screen = styled.article`
  min-height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
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
  margin-bottom: 5px;
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

const NextButton = styled.input`
  background-color: var(--color);
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
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

const Submit = styled.button`
  width: 150px;
  height: 45px;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background-color: var(--color);
  border: none;
  border-radius: 5px;
`;

const Details = styled.p`
  color: grey;
  text-align: right;
`;

export const CreateWheel = withRouter(({ history }) => {
  const { state: { city } } = useContext(LocationContext);
  const { state } = useContext(NewStoryContext);
  const { addStory } = useContext(StoryContext);

  const publishStory = () => {
    addStory({ ...state, city, community: city });
    history.push('/')
  }

  return (
    <Container>
      <TitleForm />
      <GenreForm />
      <PitchForm />
      <CoordinatesForm />
      <BodyForm />

      <Screen id='createPublish'>
        <H1>Story Completed!</H1>
        <Span>
          <Submit onClick={publishStory}>Publish</Submit>
          <BackButton href='#createBody'>Back</BackButton>
        </Span>
      </Screen>
    </Container >
  )
});

const TitleForm = () => {
  const { addTitle } = useContext(NewStoryContext);
  const [title, setTitle] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Validate
    document.getElementById('createGenre')
      .scrollIntoView({ behavior: 'smooth' });
    addTitle(title);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Screen id='createTitle'>
        <H1>Add a Title.</H1>
        <Input
          type='text'
          placeholder='Enter a Title...'
          value={title || ''}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <NextButton type='submit' value='Next' />
      </Screen>
    </form>
  )
}

const GenreForm = () => {
  const { addGenre } = useContext(NewStoryContext);
  const [genre, setGenrea] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    document.getElementById('createPitch')
      .scrollIntoView({ behavior: 'smooth' });
    addGenre(genre);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Screen id='createGenre'>
        <div id='test'></div>
        <H1>Choose a Genre.</H1>
        <Select
          type='text'
          value={genre}
          onChange={e => setGenrea(e.currentTarget.value)}
          required
        >
          <option value='' >Select a Genre...</option>
          {CHANNELS.map(item => (
            <option
              key={item.value}
              value={item.value}
            >{item.label}</option>
          ))}
        </Select>
        <Span>
          <NextButton type='submit' value='Next' />
          <BackButton href='#createTitle'>Back</BackButton>
        </Span>
      </Screen>
    </form>
  )
}

const PitchForm = () => {
  const { updateStatus, addPitch } = useContext(NewStoryContext);
  const [pitch, setPitch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    updateStatus('isPlotting');
    document.getElementById('createCoordinates')
      .scrollIntoView({ behavior: 'smooth' });
    addPitch(pitch);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Screen id='createPitch'>
        <H1>Pitch the Work.</H1>
        <Textarea
          placeholder='Enter a Pitch...'
          value={pitch}
          onChange={e => setPitch(e.target.value)}
          maxLength={140}
          required
        />
        <Details>
          {140 - String(pitch).length} Characters
        </Details>
        <Span>
          <NextButton type='submit' value='Next' />
          <BackButton href='#createGenre'>Back</BackButton>
        </Span>
      </Screen>
    </form>
  )
}

const CoordLabel = styled.label`
  font-size: 1.1rem;
  color: grey;
`;

const Coord = styled.input`
  font-size: 1.4rem;
  margin-bottom: 10px;
  border: none;
  background: white;
  outline: 0;
  padding: 4px 8px;
`;

const ExplainButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  color: grey;
  outline: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const CoordinatesForm = () => {
  const { state: { longitude, latitude }, updateStatus } = useContext(NewStoryContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (!longitude || !latitude) return alert('Plot Story to continue');

    updateStatus('inProgress');
    document.getElementById('createBody')
      .scrollIntoView({ behavior: 'smooth' });
  }

  const explainForm = () => alert('Click on the Map to set the storys location');

  return (
    <form onSubmit={handleSubmit}>
      <Screen id='createCoordinates'>
        <H1>Plot Coordinates.</H1>
        <CoordLabel>Longitude:</CoordLabel>
        <Coord
          disabled
          type='text'
          placeholder='00.00'
          value={longitude || ''}
          onChange={() => null}
          requried
        />
        <CoordLabel>Latitude:</CoordLabel>
        <Coord
          disabled
          type='text'
          placeholder='00.00'
          value={latitude || ''}
          onChange={() => null}
          required
        />
        <Details>
          <ExplainButton
            type='button'
            onClick={explainForm}
          >What is this?</ExplainButton>
        </Details>
        <Span>
          <NextButton type='submit' value='Next' />
          <BackButton
            href='#createPitch'
            onClick={() => updateStatus('inProgress')}
          >Back</BackButton>
        </Span>
      </Screen>
    </form>
  )
}

const BodyForm = () => {
  const { updateStatus, addBody } = useContext(NewStoryContext);
  const [body, setBody] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    document.getElementById('createPublish')
      .scrollIntoView({ behavior: 'smooth' });
    addBody(body);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Screen id='createBody'>
        <H1>Write Content.</H1>
        <Textarea
          placeholder='Enter body of work...'
          value={body}
          onChange={e => setBody(e.target.value)}
          required
        />
        <Span>
          <NextButton type='submit' value='Next' />
          <BackButton
            href='#createCoordinates'
            onClick={() => updateStatus('isPlotting')}
          >Back</BackButton>
        </Span>
      </Screen>
    </form>
  )
}