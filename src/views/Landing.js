import React, { useEffect } from 'react';
import { Auth } from '../layout/auth';

export const Landing = () => {
  useEffect(() => {

  }, [])

  return (
    <>
      <main style={styles.container}>
      </main>
      <Auth />
    </>
  )
}

const styles = {
  container: {
    background: 'var(--color)',
    width: '100vw',
    height: '100vh',
  }
}