import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
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
      <Route exact path='/landing/' component={Splash} />
      <Route exact path='/landing/forgot' component={Forgot} />
      <Route exact path='/landing/terms' component={Terms} />
      <Route exact path='/landing/privacy' component={Privacy} />
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