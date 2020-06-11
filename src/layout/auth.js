import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { loginUser, registerUser } from '../hooks/authHooks.js';
import { VerticalForm } from '../components/verticalForm.js';
import { GrClose } from 'react-icons/gr';
import { FlipStateButton } from '../components/flipStateButton.js';

import '../styles/auth.css';

const styles = {
  container: {
    width: '500px',
    height: '100vh',
    backgroundColor: 'white',
    position: 'fixed',
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '30px 40px 80px 40px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  close: {
    marginLeft: '40px',
    fontWeight: 'bold',
  },
  content: {
    padding: '0 30px'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'Heebo'
  }
}

export const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <section style={styles.container}>
      <header style={styles.header}>
        <FlipStateButton
          trueTitle={'Login'}
          falseTitle={'Register'}
          state={hasAccount}
          action={setHasAccount} />
        <GrClose
          style={styles.close}
          size={20} />
      </header>
      <div style={styles.content}>
        <a href='/app/home'>to App</a>
        {hasAccount ? <Login /> : <Register />}
      </div>
    </section>
  )
}

const Login = withRouter(({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const launchLogin = e => {
    e.preventDefault();
    loginUser(email, password);
    history.push('/app');
  }

  return (
    <VerticalForm action={launchLogin}>
      <h1 style={styles.title}>Sign In</h1>
      <input
        className='authInput'
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email Address'
        required />
      <input
        className='authInput'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        required />
      <input
        className='authInput'
        type='submit'
        value='Log in' />
      <p><Link to='/forgot'>Forgot Password?</Link> - <span onClick={() => alert('clicked')}>Sign up for :Muse</span></p>
    </VerticalForm>
  )
})

const Register = withRouter(({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const launchRegister = e => {
    e.preventDefault();
    if (password.length < 8) return alert('Password is not long enough');
    if (password !== confirmPassword) return alert('Passwords do not match');
    registerUser(firstName, lastName, email, password);
    history.push('/app');
  }

  return (
    <VerticalForm action={launchRegister}>
      <h1 style={styles.title}>Begin Your Story</h1>
      <input
        className='authInput'
        type='text'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder='First Name'
        required
      />
      <input
        className='authInput'
        type='text'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder='Last Name'
        required
      />
      <input
        className='authInput'
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email Address'
        required
      />
      <input
        className='authInput'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
      <input
        className='authInput'
        type='password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder='Confirm Password'
        required
      />
      <input className='authInput' type='submit' value='Register' />
      <p>Click "Register" above to accept Muse's</p>
      <p><Link to='/terms'>Terms of Service</Link> & <Link to='/privacy'>Privacy Policy.</Link></p>
    </VerticalForm>
  )
});