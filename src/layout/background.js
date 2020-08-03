import React, { useState, useEffect, useContext } from 'react';
import { API } from '../constants/network.js';

import { Context as LocationContext } from '../providers/locationProvider.js';
import { Context as RefContext } from './../providers/refProvider.js';

import { Map } from './map.js';
import { Triangulate } from '../components/triangulate.js';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100vh;
  flex: 1;
`;

export const Background = () => {
  const { state: {
    approximateLongitude,
    longitude,
    approximateLatitude,
    latitude,
  } } = useContext(LocationContext);
  const { setViewport } = React.useContext(RefContext);

  const [key, setKey] = useState();

  useEffect(() => {
    const fetchKey = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(API + '/api/v1/config/', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      if (data.status === 'failure') return alert('Please login');
      sessionStorage.setItem('key', data.payload);
      setKey(data.payload);
    };

    let apiKey = sessionStorage.getItem('key');
    apiKey === null || apiKey.length < 20 ? fetchKey() : setKey(apiKey);
  }, []);

  React.useEffect(() => {
    setViewport({
      longitude: longitude ? longitude : approximateLongitude,
      latitude: latitude ? latitude : approximateLatitude,
      width: '100vw',
      height: 'calc(100vh - 50px)',
      zoom: 12
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [longitude, latitude]);

  return <Container>
    {
      key && (approximateLongitude || longitude) ?
        <Map apikey={key} />
        // <div style={{ position: 'fixed', backgroundColor: 'pink', height: '100%', width: '100%' }}></div>
        : <Triangulate />
    }
  </Container>;
}