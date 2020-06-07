import React from 'react';

const styles = {
  container: {
    width: '100%',
    height: '180px',
    padding: '20px 30px',
    borderTop: '1px solid lightgrey'
  }
}

export const Pitch = ({ title, description }) => {
  return (
    <article style={styles.container}>
      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  )
}