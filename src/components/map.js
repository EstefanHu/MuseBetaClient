import React, { useState, useContext, memo } from 'react';
import ReactMapGl from 'react-map-gl';
import { Context as NewStoryContext } from '../providers/newStoryProvider.js';
import styled from 'styled-components';

const MapboxView = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const Map = memo(({ apikey }) => {
  const { state: { status }, addCoordinates } = useContext(NewStoryContext);
  const [viewport, setViewport] = useState({
    latitude: 47.6062,
    longitude: -122.315,
    width: '100vw',
    height: 'calc(100vh - 50px)',
    zoom: 12.5
  });

  const engageMap = e => {
    console.log(e.lngLat);
    if (status === 'inProgress') console.log('inProgress');
    if (status === 'inProgress') return addCoordinates(e.lngLat);
  }

  return (
    <MapboxView>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={apikey}
        mapStyle='mapbox://styles/estefan074/ck002rku546481cnq4hc1buof'
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
        onClick={engageMap}
      />
    </MapboxView>
  )
});