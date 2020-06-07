import React from 'react';

import { Pitch } from '../components/pitch.js';

const styles = {
  container: {
    backgroundColor: 'white',
    width: '500px',
    height: '100vh',
  },
  more: {
    width: '100%',
    height: '200px',
    borderTop: '1px solid lightgrey'
  },
  moreButton: {
    backgroundColor: 'var(--color)',
    height: '45px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '8px 15px',
  }
}

export const Feed = () => {
  return (
    <section style={styles.container}>
      <Pitch title='Hello World' description={'First Test'} />

      <div style={styles.more}>
        <button style={styles.moreButton}>See more results</button>
      </div>
    </section>
  )
}