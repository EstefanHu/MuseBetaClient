import React from 'react';
import { Route } from 'react-router-dom';
import { FaConnectdevelop } from 'react-icons/fa';
import { Splash } from '../views/Splash';
import { Auth } from '../layout/auth';

export const Landing = () => {
  return (
    <>
      <header style={styles.header}>
        <FaConnectdevelop size={40} color='black' />
        <h1>&nbsp;:Muse</h1>
        <ul style={styles.links}>
          <li>
            <a
              href='#me'
              style={styles.link}
            >Who are We</a>
          </li>
          <li>
            <a
              href='vision'
              style={styles.link}
            >Our Future</a>
          </li>
        </ul>
      </header>
      <Route exact path='/' component={Splash} />
      <Auth />
    </>
  )
}

const styles = {
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 30px',
    color: 'white',
  },
  links: {
    display: 'flex',
    listStyle: 'none',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '40px',
    fontSize: '1.2rem',
  },
}