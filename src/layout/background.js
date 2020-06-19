import React, { useState, useEffect, useContext } from 'react';
import { API } from '../constants/api.js';

import { Context as LocationContext } from '../providers/locationProvider.js';

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

  const [key, setKey] = useState('');

  useEffect(() => {
    console.log('looking for key');

    const fetchKey = async () => {
      await fetch(API + '/auth/mapKey', {
        credentials: 'include'
      }).then(res => res.json())
        .then(res => {
          sessionStorage.setItem('key', res.key);
          apiKey = res.key;
        })
        .catch(console.error);

      setKey(apiKey);
    };

    let apiKey = sessionStorage.getItem('key');
    apiKey === null ? fetchKey() : setKey(apiKey);
  }, []);

  return <Container>
    {
      key && (approximateLongitude || longitude) ?
        <Map
          apikey={key}
          longitude={longitude ? longitude : approximateLongitude}
          latitude={latitude ? latitude : approximateLatitude}
        />
        // <div style={{ position: 'fixed', backgroundColor: 'pink', height: '100%', width: '100%' }}></div>
        : <Triangulate />
    }
  </Container>;
}