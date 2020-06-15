import React, { useState } from 'react';

export const Forgot = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    console.log(email);
  }

  return (
    <section style={styles.container}>
      <h1>Hello from Forgot</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type='email'
          placeholder='Email Address'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          style={styles.input}
          type='submit'
          value='Submit'
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
    fontSize: '2rem',
  },
  form: {},
  input: {

  }
}