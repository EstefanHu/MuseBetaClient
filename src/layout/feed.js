import React from 'react';

import { Filter } from '../components/filter.js';
import { Pitch } from '../components/pitch.js';

const styles = {
  container: {
    backgroundColor: 'white',
    width: '500px',
    height: '100vh',
  },
  more: {
    width: '100%',
    height: '100px',
    borderTop: '1px solid lightgrey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreButton: {
    backgroundColor: 'var(--color)',
    height: '45px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '8px 20px',
  }
}

export const Feed = () => {
  const fetchStories = () => {
    console.log('hello')
  }
  
  return (
    <section style={styles.container}>
      <Filter />
      <Pitch title='Hello World' description={'First Test'} />

      <div style={styles.more}>
        <button style={styles.moreButton} onClick={fetchStories}>See more results</button>
      </div>
    </section>
  )
}