import React, { useState, useEffect, useContext, memo } from 'react';
import { Route } from 'react-router-dom';
import ReactMapGl, { Marker } from 'react-map-gl';

import { MdLocationOn } from 'react-icons/md';

import { Context as LocationContext } from '../providers/locationProvider.js';
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

export const Map = memo(({ apikey, approximateLongitude, approximateLatitude }) => {
  const { state: {
    longitude,
    latitude,
  } } = useContext(LocationContext);
  const { state: { status }, addCoordinates } = useContext(NewStoryContext);

  const [viewport, setViewport] = useState({
    longitude: approximateLongitude,
    latitude: approximateLatitude,
    width: '100vw',
    height: 'calc(100vh - 50px)',
    zoom: 12
  });

  useEffect(() => {
    if (longitude) setViewport({
      ...viewport,
      longitude: longitude,
      latitude: latitude,
    });
  }, [viewport, longitude, latitude]);

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

        <Route exact path='/' component={HomeMarkers} />
        <Route exact path='/new' component={NewMarker} />

      </ReactMapGl>
    </MapboxView >
  )
});

const HomeMarkers = () => {
  const { state: storyState } = useContext(StoryContext);

  return (
    <>
      {
        storyState ? storyState.map((item, idx) => (
          <Marker
            key={idx}
            latitude={item.latitude}
            longitude={item.longitude}
            offsetLeft={-25}
            offsetTop={-47}
          >
            <MdLocationOn size='35' />
          </Marker>
        )) : null
      }
    </>
  )
}

const NewMarker = () => {
  const { state: { longitude, latitude } } = useContext(NewStoryContext);

  return (
    <>
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
    </>
  )
}