import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export const FourOhFour = () => {
  return (
    <main style={styles.container}>
      <Link to='/'>
        <h1>404</h1>
      </Link>
    </main>
  )
}