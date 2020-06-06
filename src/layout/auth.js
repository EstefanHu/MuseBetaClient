import React, { useState } from 'react';
import { loginUser, registerUser } from '../hooks/authHooks.js';
import { VerticleForm } from '../components/verticalForm.js';

export const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <section>
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
    <VerticleForm action={launchLogin}>
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
    </VerticleForm>
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
    <VerticleForm action={launchRegister}>
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
    </VerticleForm>
  )
}