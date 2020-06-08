import React, { useState } from 'react';

import '../styles/navbar.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'var(--color)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    zIndex: 10,
    color: 'var(--color)',
    paddingLeft: '20px'
  },
  logo: {
    fontFamily: 'Heebo',
    marginRight: '25px',
    marginBottom: '0px',
    color: 'white',
  },
  search: {
    fontSize: '1rem',
    border: 'none',
    borderRadius: '3px',
    padding: '10px 12px',
    outline: 'none',
    marginRight: '10px',
  }
}

export const NavBar = () => {
  const [creating, setCreating] = useState(false);

  return (
    <nav style={styles.container}>
      <h1 style={styles.logo}>:Muse</h1>
      <span>
        {creating ? <Tools toggleCreate={() => setCreating(false)} />
          : <Create toggleCreate={() => setCreating(true)} />}
      </span>
    </nav>
  )
}

const Create = ({ toggleCreate }) => {
  return (
    <>
      <input style={styles.search} placeholder='Search...' />
      <button onClick={toggleCreate} className='navbar_button'>New</button>
    </>
  )
}

const Tools = ({ toggleCreate }) => {
  return (
    <button onClick={toggleCreate} className='navbar_button'>Cancel</button>
  )
}