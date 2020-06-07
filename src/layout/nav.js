import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    top: '55px',
    width: '70px',
    zIndex: '5',
    backgroundColor: 'white'
  }
}

export const Nav = () => {
  return (
    <nav style={styles.container}>

    </nav>
  )
}