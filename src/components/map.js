import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

export const Map = ({ apikey }) => {
  const [viewport, setViewport] = useState({
    latitude: 47.6062,
    longitude: -122.3321,
    width: '100vw',
    height: '100vh',
    zoom: 14
  });

  return (
    <div id='mapboxView'>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={'pk.eyJ1IjoiZXN0ZWZhbjA3NCIsImEiOiJjazltN2d3bGMyZGxqM2hxdHRneGhwOGJ0In0.qIWG-bwqMgy8NMOKRIdRzA'}
        mapStyle='mapbox://styles/estefan074/ck002rku546481cnq4hc1buof'
        onViewportChange={viewport => {
          setViewport(viewport)
        }} />
    </div>
  )
}