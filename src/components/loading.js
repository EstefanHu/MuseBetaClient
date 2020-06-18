import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  margin: 0 auto;
  width: fit-content;

  & > p {
    background-color: grey;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    position: relative;
  }

  & > p::before,
  & > p::after {
    animation-duration: .6s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-name: loading;
    animation-direction: alternate;
    animation-play-state: running;
    position: absolute;
    content: "";
    background-color: var(--color);
    border-radius: 50%;
    top: 0px;
    width: 15px;
    height: 15px;
  }

  & > p::before {
    left: -25px;
    transform-origin: 32.5px center;
  }

  & > p::after {
    left: 25px;
    transform-origin: -17.5px center;
  }
  
`;

export const Loading = () => {
  return (
    <Loader>
      <p></p>
    </Loader>
  )
}