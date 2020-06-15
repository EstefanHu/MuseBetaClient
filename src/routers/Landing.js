import React from 'react';
import { Route, Link } from 'react-router-dom';
import { FaConnectdevelop } from 'react-icons/fa';
import { Splash } from '../views/Splash.js';
import { Forgot } from '../views/Forgot.js';
import { Terms } from '../views/Terms.js';
import { Privacy } from '../views/Privacy.js';
import { Auth } from '../layout/auth.js';

export const Landing = () => {
  return (
    <>
      <header style={styles.header}>
        <FaConnectdevelop size={40} color='black' />&nbsp;
        <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>
          <h1>:Muse</h1>
        </Link>
        <Route exact path='/'>
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
        </Route>
      </header>
      <Route exact path='/' component={Splash} />
      <Route exact path='/forgot' component={Forgot} />
      <Route exact path='/terms' component={Terms} />
      <Route exact path='/privacy' component={Privacy} />
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