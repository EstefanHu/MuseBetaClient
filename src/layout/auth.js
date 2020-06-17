import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { loginUser, registerUser } from '../hooks/authHooks.js';
import { GrClose } from 'react-icons/gr';
import { FlipStateButton } from '../components/flipStateButton.js';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 1,
  },
  close: {
    marginLeft: '40px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  content: {
    padding: '0 30px',
    zIndex: 1,
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'Heebo'
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  watermark: {
    color: 'var(--color-secondary)',
    fontSize: '20rem',
    fontFamily: 'Heebo',
    fontWeight: 'bold',
    transform: 'rotate(90deg)',
    msTransform: 'rotate(90deg)',
  },
  endLinks: {
    textAlign: 'center',
  },
  link: {
    color: 'grey',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  open: {
    position: 'fixed',
    right: 0,
    top: 0,
    height: '60px',
    width: '230px',
    display: 'flex',
    alignItems: 'bottom',
    justifyContent: 'space-around',
    paddingRight: '30px',
    zIndex: 0,
  },
  authButton: {
    width: '80px',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '1.2rem',
    color: 'white',
  },
}

const Container = styled.section`
  width: 500px;
  height: 100vh;
  background-color: rgb(250,250,250);
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 40px 80px 40px;
  z-index: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;

const Label = styled.label`
  color: grey;
  font-size: 0.7rem;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border-radius: 5px;
  width: 100%;
  border: 1px solid lightgrey;
  background: white;
  padding: 14px 10px;
  margin-bottom: 10px;
  font-size: 1.1rem;

  &:focus {
    border-color: var(--color);
    outline: none;
  }

  &:hover {
    border-color: grey;
  }

  &[type='submit'] {
    background: var(--color);
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
    border: none;
  }
`;

export const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <Container>
      <header style={styles.header}>
        <FlipStateButton
          trueTitle={'Login'}
          falseTitle={'Register'}
          state={hasAccount}
          action={setHasAccount} />
        <GrClose
          style={styles.close}
          size={20}
          onClick={() => setIsOpen(false)}
        />
      </header>
      <div style={styles.logo}>
        <h1 style={styles.watermark}>:Muse</h1>
      </div>
      <div style={styles.content}>
        <a href='/app/home'>to App</a>
        {hasAccount ? <Login setHasAccount={setHasAccount} /> : <Register />}
      </div>
    </Container>
  ) : (
      <div style={styles.open}>
        <button
          style={styles.authButton}
          onClick={() => {
            setIsOpen(true);
            setHasAccount(true);
          }}>Sign in</button>
        <button
          style={styles.authButton}
          onClick={() => {
            setIsOpen(true);
            setHasAccount(false);
          }}>Register</button>
      </div>
    )
}

const Login = withRouter(({ history, setHasAccount }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const launchLogin = e => {
    e.preventDefault();
    loginUser(email, password);
    history.push('/app');
  }

  return (
    <Form onSubmit={launchLogin}>
      <h1 style={styles.title}>Sign In</h1>
      <Label>EMAIL ADDRESS (REQUIRED)</Label>
      <Input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email Address'
        required />
      <Label>PASSWORD (REQUIRED)</Label>
      <Input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        required />
      <Input
        type='submit'
        value='Log in' />
      <span style={styles.endLinks}>
        <p>
          <Link style={styles.link} to='/forgot'>Forgot Password?</Link> -&nbsp;
        <span style={styles.link} onClick={() => setHasAccount(false)}>Sign up for :Muse</span>
        </p>
      </span>
    </Form>
  )
});

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
    <Form onSubmit={launchRegister}>
      <h1 style={styles.title}>Begin Your Story</h1>
      <Label>FIRST NAME (REQUIRED)</Label>
      <Input
        type='text'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder='First Name'
        required
      />
      <Label>LAST NAME (REQUIRED)</Label>
      <Input
        type='text'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder='Last Name'
        required
      />
      <Label>EMAIL ADDRESS (REQUIRED)</Label>
      <Input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email Address'
        required
      />
      <Label>PASSWORD (REQUIRED)</Label>
      <Input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
      <Label>CONFIRM PASSWORD(REQUIRED)</Label>
      <Input
        type='password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder='Confirm Password'
        required
      />
      <Input
        type='submit'
        value='Register'
      />
      <span style={styles.endLinks}>
        <p>Click "Register" above to accept Muse's</p>
        <p>
          <Link style={styles.link} to='/terms'>Terms of Service</Link> &&nbsp;
          <Link style={styles.link} to='/privacy'>Privacy Policy.</Link>
        </p>
      </span>
    </Form>
  )
});