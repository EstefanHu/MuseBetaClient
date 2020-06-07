import React from 'react';
import {
  AiFillHome
} from 'react-icons/ai';

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
    backgroundColor: 'var(--color)'
  }
}

export const Nav = () => {
  return (
    <nav style={styles.container}>
      <AiFillHome size='30' color={'white'} />
    </nav>
  )
}