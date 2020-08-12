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
        <h1 style={styles.footerHeader}>Project:Muse</h1>
        <section style={styles.footerSection}>
          <h4 style={styles.footerSectionHeader}>Links</h4>
          <Link style={styles.footerLink} to='/'>Home</Link>
          <Link style={styles.footerLink} to='/terms'>Terms</Link>
          <Link style={styles.footerLink} to='/privacy'>Privacy</Link>
        </section>
        <section style={styles.footerSection}>
          <h4 style={styles.footerSectionHeader}>Apps</h4>
        </section>
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
    position: 'relative',
    backgroundColor: 'rgb(25,25,25)',
    width: '100vw',
    height: '300px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footerContent: {
    width: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: 'rgb(20,20,20)',
    fontSize: '240px',
    zIndex: 0,
    cursor: 'default'
  },
  footerSection: {
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1,
    padding: '60px 0',
    marginLeft: '100px',
  },
  footerSectionHeader: {
    color: 'var(--color-secondary)',
    fontSize: '22px',
    textDecoration: 'underline',
    marginBottom: '15px',
    cursor: 'default'
  },
  footerLink: {
    color: 'var(--color-secondary)',
    textDecoration: 'none',
    fontSize: '19px',
    marginBottom: '6px',
  }
};