import React from 'react';
import { RiBookmarkLine } from 'react-icons/ri';
import { BsBook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    width: '100%',
    padding: '15px 20px 15px 20px',
    borderTop: '1px solid lightgrey'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '3px',
  },
  title: {
    fontSize: '1.5rem',
    color: 'var(--color)',
    marginRight: '5px',
  },
  genre: {
    color: 'grey',
    textDecoration: 'none',
    fontSize: '.9rem',
  },
  pitch: {
    textIndent: '20px'
  },
  meta: {
    marginTop: '5px',
    fontSize: '.9rem',
    color: 'grey',
  },
  author: {
    color: 'grey',
    textDecoration: 'none',
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  button: {
    border: 'none',
    background: 'rgb(240,240,240)',
    borderRadius: '3px',
    fontSize: '.9rem',
    padding: '8px 12px',
    borderBottom: '1.5px solid lightgrey',
    display: 'flex',
    alignItems: 'center',
    marginRight: '8px',
  }
}

export const Pitch = ({ index, title, pitch, genre, createdAt, author, authorId }) => {
  return (
    <article style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>{index}. {title}</h1>
        <Link to={`/app/genre/${genre}`} style={styles.genre}>{genre}</Link>
      </header>
      <p style={styles.pitch}>{pitch}</p>
      <p style={styles.meta}><Link to={`/app/profile/${authorId}`} style={styles.author}>{author}&nbsp;</Link>-&nbsp;{createdAt}</p>
      <footer style={styles.actions}>
        <button style={styles.button}>
          <RiBookmarkLine size={20} color='grey' />&nbsp;&nbsp;Save
          </button>
        <button style={styles.button}>
          <BsBook size={20} color='grey' />&nbsp;&nbsp;Read
        </button>
      </footer>
    </article>
  )
}