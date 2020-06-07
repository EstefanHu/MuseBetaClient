import React from 'react';
import { NavBar } from '../layout/NavBar';
import { Feed } from '../layout/feed';
import { Background } from '../layout/background';

const styles = {
  viewContainer: {
    position: 'fixed',
    top: '60px',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
  }
}

export const Primary = () => {
  return (
    <>
      <NavBar />
      <span style={styles.viewContainer}>
        <Feed />
        <Background />
      </span>
    </>
  )
}