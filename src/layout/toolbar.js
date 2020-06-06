import React from 'react';

const styles = {
  container: {
    backgroundColor: 'var(--color)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '55px',
    zIndex: 10,
    diplay: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  logo: {
    fontFamily: 'Heebo'
  }
}

export const Toolbar = () => {
  return (
    <nav style={styles.container}>
      <h1 style={styles.logo}>:M</h1>
    </nav>
  )
}