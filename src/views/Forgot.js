import React, { useState } from 'react';

export const Forgot = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    console.log(email);
  }

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Find your Muse Account</h1>
      <p style={styles.instructions}>Enter your Email Address </p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          autoFocus
          style={styles.input}
          type='email'
          placeholder='Email Address'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          style={styles.submit}
          type='submit'
          value='Search'
        />
      </form>
    </section>
  )
}

const styles = {
  container: {
    background: 'var(--color)',
    height: '100vh',
    padding: '250px 0 0 70px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '50px'
  },
  instructions: {
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
  },
  input: {
    border: 'none',
    borderRadius: '5px',
    height: '45px',
    fontSize: '1.3rem',
    padding: '8px 12px',
    margin: '10px 0 20px 0',
  },
  submit: {
    border: 'none',
    borderRadius: '5px',
    height: '45px',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    width: '200px'
  }
}