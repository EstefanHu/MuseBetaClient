import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
      <Link to='/app/home'>
        <AiFillHome size='30' color='white' />
      </Link>
      <Link to='/app/profile'>
        <BsFillPersonFill size='30' color='white' />
      </Link>
      <Link to='/app/settings'>
        <MdSettings size='30' color='white' />
      </Link>
    </nav>
  )
}