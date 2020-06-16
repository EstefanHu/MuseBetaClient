import React, { useState } from 'react';
import styled from 'styled-components';

const TrackerContainer = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tracker = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 30px;
`;

const ProgressDrawer = styled.span`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 10px;
  width: fit-content;
  overflow: show;
`;

const Button = styled.button`
  width: 65px;
  height: 65px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid lightgrey;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
    background-color: rgb(250,250,250)
  }
`;

const ProgressLabel = styled.h1`
  transition: opacity 1s;
`;

export const StoryCreateTracker = () => {
  return (
    <TrackerContainer>
      <Tracker>
        <ProgressNode count={1} label={'Initial'} />
        <ProgressNode count={2} label={'Geolocation'} />
        <ProgressNode count={3} label={'Body'} />
      </Tracker>
    </TrackerContainer>
  )
}

const ProgressNode = ({ count, label }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <ProgressDrawer>
      <Button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {count}
      </Button>
      {isHover && <ProgressLabel>{label}</ProgressLabel>}
    </ProgressDrawer>
  )
}