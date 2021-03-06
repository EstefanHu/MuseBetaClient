import React, { useEffect, useContext } from 'react';

import { CreateWheel } from '../components/createWheel.js';

import { Context as NewStoryContext } from '../providers/newStoryProvider.js';

import styled from 'styled-components';

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
  const { state: { status }, updateStatus } = useContext(NewStoryContext);

  useEffect(() => {
    updateStatus('inProgress');
    return () => updateStatus('inactive');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CreateWheel />
      {status !== 'isPlotting' && <Overlay />}
    </>
  )
}