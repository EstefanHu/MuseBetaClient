import React, { useState, useEffect } from 'react';
import { getApiKey } from '../hooks/locationHooks';
import { Map } from '../components/map.js';
import { Triangulate } from '../components/triangulate.js'

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    flex: 1
  }
}

export const Background = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    console.log('looking for key');
    getApiKey(setKey);
  }, []);

  return <div style={styles.container}>
    {key ?
      // <Map apikey={key} />
      <div style={{ backgroundColor: 'pink', height: '100%', width: '100%' }}></div>
      : <Triangulate />
    }
  </div>;
}