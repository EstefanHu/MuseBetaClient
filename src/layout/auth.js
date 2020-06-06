import React, { useState } from 'react';
import { loginUser, registerUser } from '../hooks/authHooks.js';
import { VerticalForm } from '../components/verticalForm.js';
import { GrClose } from 'react-icons/gr';
import { FlipStateButton } from '../components/flipStateButton.js';

const styles = {
  container: {
    width: '600px',
    height: '100vh',
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '20px',
  }
}

export const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <section style={styles.container}>
      <header style={styles.header}>
        <FlipStateButton trueTitle={'Login'} falseTitle={'Register'} state={hasAccount} action={setHasAccount} />
        <GrClose />
      </header>
      {hasAccount ? <Login /> : <Register />}
    </section>
  )
}

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const launchLogin = e => {
    e.preventDefault();
    loginUser(email, password);
    history.push('/app');
  }

  return (
    <VerticalForm action={launchLogin}>
      <input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email Address'
        required
      />
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
    </VerticalForm>
  )
}

const Register = ({ history }) => {
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
      <input
        className='landing__form--input'
        type='text'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder='First Name'
        required
      />
      <input
        className='landing__form--input'
        type='text'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder='Last Name'
        required
      />
      <input
        className='landing__form--input'
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email Address'
        required
      />
      <input
        className='landing__form--input'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
      <input
        className='landing__form--input'
        type='password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder='Confirm Password'
        required
      />
      <input type='submit' value='Register' />
    </VerticalForm>
  )
}