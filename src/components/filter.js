import React, { useState } from 'react';
import { GENRES } from '../constants/genre.js';

const styles = {
  container: {
    display: 'block',
    width: '100%',
    overflow: 'auto',
    whiteSpace: 'nowrap',
    padding: '8px',
  },
  button: {
    display: 'inline-block',
    border: '1px solid lightgrey',
    borderRadius: '15px',
    background: 'rgb(240,240,240)',
    fontSize: '.8rem',
    fontWeight: 'bold',
    padding: '6px 12px',
    cursor: 'pointer',
    margin: '0 5px'
  }
}

export const Filter = ({ setGenre }) => (
  <span style={styles.container} className='noBar'>
    <button style={styles.button} onClick={() => setGenre('All')}>All</button>
    {GENRES.map(item => (
      <button key={item} style={styles.button} onClick={() => setGenre({ item })}>{item}</button>
    ))}
  </span>
)