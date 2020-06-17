import React, { useState, memo } from 'react';
import ReactMapGl from 'react-map-gl';
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
  const [viewport, setViewport] = useState({
    latitude: 47.6062,
    longitude: -122.315,
    width: '100vw',
    height: 'calc(100vh - 60px)',
    zoom: 12.5
  });

  return (
    <MapboxView>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={apikey}
        mapStyle='mapbox://styles/estefan074/ck002rku546481cnq4hc1buof'
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
        onClick={(e) => console.log(e)}
      />
    </MapboxView>
  )
});