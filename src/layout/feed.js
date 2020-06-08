import React, { useState, useEffect, useContext } from 'react';
import { Context as StoryContext } from '../providers/storyProvider.js';

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
  const { state } = useContext(StoryContext);
  const [genre, setGenre] = useState('All');


  const fetchStories = () => {
    console.log('hello')
  }

  return (
    <section style={styles.container}>
      <Filter setGenre={item => setGenre(item)} />
      <Pitch
        index={1}
        title='Hello World'
        description={'ndustrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the.'}
        genre={'Fiction'}
        createdAt={'October 17, 2019'}
        author={'Estefan Hu'}
      />
      <div style={styles.more}>
        <button style={styles.moreButton} onClick={fetchStories}>See more results</button>
      </div>
    </section>
  )
}