import React, { useState } from 'react';

import { CreateWheel } from '../components/createWheel.js';

import styled from 'styled-components';

const Container = styled.section`
  width: 700px;
  height: calc(100vh - 60px);
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
    <Container>
      <h1>Display</h1>
      <CreateWheel />
    </Container>
  )
}