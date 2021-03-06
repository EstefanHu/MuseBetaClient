import React, { useState } from 'react';
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
import { Context as RefContext } from './../providers/refProvider.js';
import { Context as ProfileContext } from './../providers/profileProvider.js';

import styled from 'styled-components';

const Pin = styled.svg`
  cursor: pointer;
  stroke: none;
  z-index: 5;
`;

const PopupContainer = styled(Popup)`
  & > div:first-child {
    border-top: 5px solid white;
  }

  & > div:last-child {
    border: 3px solid var(--color);
    border-radius: 5px;
  }
`;

const InfoPopup = styled.div`
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

export const Map = React.memo(({ apikey, longitude, latitude }) => {
  const { state: { status }, addCoordinates } = React.useContext(NewStoryContext);
  const { state: { viewport }, setMapRef, setViewport } = React.useContext(RefContext);

  const mapRef = React.useRef(null);
  React.useEffect(() => {
    setMapRef(mapRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const engageMap = e => {
    if (status === 'isPlotting') return addCoordinates(e.lngLat);
  }

  return (
    <MapboxView>
      <ReactMapGl
        {...viewport}
        ref={mapRef}
        mapboxApiAccessToken={apikey}
        mapStyle='mapbox://styles/estefan074/ck002rku546481cnq4hc1buof'
        onViewportChange={viewport => setViewport(viewport)}
        getCursor={() => { return 'default' }}
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
        <Route exact path='/profile' component={ProfileMarkers} />

      </ReactMapGl>
    </MapboxView >
  )
});

const HomeMarkers = () => {
  const { state: { channel, focusedStoryId, stories } } = React.useContext(StoryContext);
  const [popupInfo, setPopupInfo] = useState(null);
  const SIZE = 30;

  return stories && (
    <>
      {
        stories.map(item => {
          if (channel === 'All' || channel === item.channel)
            return <Marker
              key={item._id}
              longitude={item.startLocation.coordinates[0]}
              latitude={item.startLocation.coordinates[1]}
              style={{ position: 'relative' }}
            >
              <Pin
                height={SIZE}
                viewBox="0 0 24 24"
                style={{
                  fill: focusedStoryId === item._id ? 'var(--color)' : 'black',
                  transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                }}
                onMouseEnter={() => setPopupInfo(item)}
                onMouseLeave={() => setPopupInfo(null)}
              >
                <path d={PIN} />
              </Pin>
            </Marker>
          return null;
        })
      }
      {
        popupInfo &&
        <PopupContainer
          tipSize={0}
          longitude={popupInfo.startLocation.coordinates[0]}
          latitude={popupInfo.startLocation.coordinates[1]}
          closeButton={false}
          anchor='bottom'
          offsetTop={-35}
        >
          <InfoPopup>{popupInfo.title}</InfoPopup>
        </PopupContainer>
      }
    </>
  )
}

const NewMarker = () => {
  const { state: { longitude, latitude } } = React.useContext(NewStoryContext);
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

const ProfileMarkers = () => {
  const { state: { channel, focusedStoryId } } = React.useContext(StoryContext);
  const { state: { library, stories } } = React.useContext(ProfileContext);
  const [popupInfo, setPopupInfo] = useState(null);
  const SIZE = 30;

  return library && stories && (
    <>
      {
        stories.concat(library).map((item, idx) => {
          if (channel === 'All' || channel === item.channel)
            return <Marker
              key={item._id + idx}
              longitude={item.startLocation.coordinates[0]}
              latitude={item.startLocation.coordinates[1]}
              style={{ position: 'relative' }}
            >
              <Pin
                height={SIZE}
                viewBox="0 0 24 24"
                style={{
                  fill: focusedStoryId === item._id ? 'var(--color)' : 'black',
                  transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                }}
                onMouseEnter={() => setPopupInfo(item)}
                onMouseLeave={() => setPopupInfo(null)}
              >
                <path d={PIN} />
              </Pin>
            </Marker>
          return null;
        })
      }
      {
        popupInfo &&
        <PopupContainer
          tipSize={0}
          longitude={popupInfo.startLocation.coordinates[0]}
          latitude={popupInfo.startLocation.coordinates[1]}
          closeButton={false}
          anchor='bottom'
          offsetTop={-35}
        >
          <InfoPopup>{popupInfo.title}</InfoPopup>
        </PopupContainer>
      }
    </>
  );
};