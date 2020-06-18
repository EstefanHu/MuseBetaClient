import React, { useState, useContext, memo } from 'react';
import { Route } from 'react-router-dom';
import ReactMapGl, { Marker } from 'react-map-gl';

import { MdLocationOn } from 'react-icons/md';

import { Context as NewStoryContext } from '../providers/newStoryProvider.js';
import { Context as StoryContext } from '../providers/storyProvider.js';

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
  const { state: stories } = useContext(StoryContext);
  const { state: {
    status,
    longitude,
    latitude
  },
    addCoordinates
  } = useContext(NewStoryContext);

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
      >

        <Route exact path='/'>
          {stories ? stories.map((item, idx) => (
            <Marker
              key={idx}
              latitude={item.latitude}
              longitude={item.longitude}
              offsetLeft={-25}
              offsetTop={-47}
            >
              <MdLocationOn size='35' />
            </Marker>
          )) : null}
        </Route>

        <Route exact path='/new'>
          {
            longitude &&
            <Marker
              latitude={latitude}
              longitude={longitude}
              offsetLeft={-25}
              offsetRight={-47}
            >
              <MdLocationOn size='45' />
            </Marker>
          }
        </Route>

      </ReactMapGl>
    </MapboxView >
  )
});