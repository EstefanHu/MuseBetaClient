import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  z-index: 8;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: purple;
`;

export const New = () => {
  return (
    <Overlay>

    </Overlay>
  )
}