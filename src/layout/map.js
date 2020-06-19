import React, { useState, useContext, memo } from 'react';
import { Route } from 'react-router-dom';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { PIN } from '../constants/svg.js';

import { Context as NewStoryContext } from '../providers/newStoryProvider.js';
import { Context as StoryContext } from '../providers/storyProvider.js';

import styled from 'styled-components';

const Pin = styled.svg`
  cursor: pointer;
  // fill: var(--color);
  stroke: none;
`;


const MapboxView = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const Map = memo(({ apikey, longitude, latitude }) => {
  const { state: { status }, addCoordinates } = useContext(NewStoryContext);
  const { state: storyState } = useContext(StoryContext);

  const [viewport, setViewport] = useState({
    longitude: longitude,
    latitude: latitude,
    width: '100vw',
    height: 'calc(100vh - 50px)',
    zoom: 12
  });

  const engageMap = e => {
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
          {storyState &&
            storyState.map((item, idx) => (
              <StoryMarker
                key={idx}
                title={item.title}
                longitude={item.longitude}
                latitude={item.latitude}
              />
            ))}
        </Route>
        <Route exact path='/new' component={NewMarker} />

      </ReactMapGl>
    </MapboxView >
  )
});

const StoryMarker = ({ title, longitude, latitude }) => {
  const [showPopup, setShowPopup] = useState(false);
  const SIZE = 30;

  return (
    <Marker
      longitude={longitude}
      latitude={latitude}
    >
      <Pin
        height={SIZE}
        viewBox="0 0 24 24"
        style={{ transform: `translate(${-SIZE / 2}px,${-SIZE}px)` }}
        onClick={() => setShowPopup(true)}
      >
        <path d={PIN} />
      </Pin>
      {
        showPopup &&
        <Popup
          longitude={longitude}
          latitude={latitude}
          closeButton={true}
          closeOnClick={true}
          onClose={() => setShowPopup(false)}
        >
          <div>{title}</div>
        </Popup>
      }
    </Marker>
  )
}

const NewMarker = () => {
  const { state: { longitude, latitude } } = useContext(NewStoryContext);
  const SIZE = 35;

  return (
    <>
      {
        longitude &&
        <Marker
          latitude={latitude}
          longitude={longitude}
        >
          <Pin
            height={SIZE}
            viewBox="0 0 24 24"
            style={{ transform: `translate(${-SIZE / 2}px,${-SIZE}px)` }}
            onClick={() => null}
          >
            <path d={PIN} />
          </Pin>
        </Marker>
      }
    </>
  )
}