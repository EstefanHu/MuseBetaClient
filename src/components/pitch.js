import React from 'react';

const styles = {
  container: {
    width: '100%',
    height: '150px',
    padding: '20px 30px',
    borderTop: '1px solid lightgrey'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  credibility: {
    fontSize: '1rem',
  }
}

export const Pitch = ({ title, description, genre, credibility, createdAt, author, authorId }) => {
  return (
    <article style={styles.container}>
      <span style={styles.header}>
        <h1>{title}</h1>
        <p style={styles.credibility}>{credibility}</p>
      </span>
      <span>
        <p>{genre} by {author}</p>
      </span>
      <p>{description}</p>
    </article>
  )
}