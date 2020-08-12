import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
              <ScrollLink
                to='me'
                smooth={true}
                duration={500}
                style={styles.link}
              >Who are We</ScrollLink>
            </li>
            <li>
              <ScrollLink
                to='vision'
                style={styles.link}
              >Our Future</ScrollLink>
            </li>
          </ul>
        </Route>
      </header>
      <Route exact path='/' component={Splash} />
      <Route exact path='/forgot' component={Forgot} />
      <Route exact path='/terms' component={Terms} />
      <Route exact path='/privacy' component={Privacy} />
      <Auth />
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <h1 style={styles.footerHeader}>Project:Muse</h1>
          <span style={styles.footerLinksContainer}>
            <Link style={styles.footerLink} to='/'>Home</Link>
            <Link style={styles.footerLink} to='/terms'>Terms</Link>
            <Link style={styles.footerLink} to='/privacy'>Privacy</Link>
          </span>
        </div>
        <div></div>
      </footer>
    </>
  );
};

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
  footer: {
    backgroundColor: 'rgb(30,30,30)',
    width: '100vw',
    height: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerContent: {
    width: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerHeader: {
    color: 'var(--color-secondary)'
  },
  footerLinksContainer: {
    width: '400px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  }
};