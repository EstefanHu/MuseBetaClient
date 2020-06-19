import React, { useState, useContext, memo } from 'react';
import { Route } from 'react-router-dom';
import ReactMapGl, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import { PIN } from '../constants/svg.js';

import { Context as NewStoryContext } from '../providers/newStoryProvider.js';
import { Context as StoryContext } from '../providers/storyProvider.js';

import styled from 'styled-components';

const Pin = styled.svg`
  cursor: pointer;
  // fill: var(--color);
  stroke: none;
  z-index: 5;
`;

const InfoPopup = styled.div`
  z-index: 10;
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

const MapMetaInfo = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 49px;
  padding: 10px;
`;

const MapActions = styled.span`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    // padding: 10px;
  }
`;

export const Map = memo(({ apikey, longitude, latitude }) => {
  const { state: { status }, addCoordinates } = useContext(NewStoryContext);

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
        <MapMetaInfo>
          <MapActions>
            <FullscreenControl />
            <NavigationControl />
            <GeolocateControl />
          </MapActions>
          <ScaleControl />
        </MapMetaInfo>

        <Route exact path='/' component={HomeMarkers} />
        <Route exact path='/new' component={NewMarker} />

      </ReactMapGl>
    </MapboxView >
  )
});

const HomeMarkers = () => {
  const { state: storyState } = useContext(StoryContext);

  return storyState &&
    storyState.map(item => (
      <HomeMarker
        key={item._id}
        title={item.title}
        longitude={item.longitude}
        latitude={item.latitude}
      />
    ))
}

const HomeMarker = ({ title, longitude, latitude }) => {
  const [showPopup, setShowPopup] = useState(false);
  const SIZE = 30;

  return (
    <>
      <Marker
        longitude={longitude}
        latitude={latitude}
        style={{ position: 'relative' }}
      >
        <Pin
          height={SIZE}
          viewBox="0 0 24 24"
          style={{ transform: `translate(${-SIZE / 2}px,${-SIZE}px)` }}
          onClick={() => setShowPopup(true)}
        >
          <path d={PIN} />
        </Pin>
      </Marker>
      {
        showPopup &&
        <Popup
          tipSize={5}
          longitude={longitude}
          latitude={latitude}
          altitude={0}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
          anchor='bottom'
        >
          <InfoPopup>{title}</InfoPopup>
        </Popup>
      }
    </>
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