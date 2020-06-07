import React, { useState } from 'react';

import '../styles/toolbar.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '55px',
    zIndex: 10,
    color: 'var(--color)',
    paddingLeft: '20px'
  },
  logo: {
    fontFamily: 'Heebo',
    marginRight: '25px'
  }
}

export const Toolbar = () => {
  const [creating, setCreating] = useState(false);

  return (
    <nav style={styles.container}>
      <h1 style={styles.logo}>:M</h1>
      <span>
        {creating ? <Tools toggleCreate={() => setCreating(false)} />
          : <Create toggleCreate={() => setCreating(true)} />}
      </span>
    </nav>
  )
}

const Create = ({ toggleCreate }) => {
  return (
    <button onClick={toggleCreate} className='toolbar_button'>New</button>
  )
}

const Tools = ({ toggleCreate }) => {
  return (
    <button onClick={toggleCreate} className='toolbar_button'>Cancel</button>
  )
}