import React from 'react';

export const VerticalForm = ({ action, children }) => (
  <form onSubmit={action} style={styles.form}>
    {children}
  </form>
)

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  }
}