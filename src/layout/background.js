import React, { useState, useEffect } from 'react';
import { getApiKey } from '../hooks/locationHooks';
import { Map } from '../components/map.js';
import { Triangulate } from '../components/triangulate.js'

export const Background = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    console.log('looking for key');
    getApiKey(setKey);
  }, []);

  return key ? <Map apikey={key} /> : <Triangulate />;
}