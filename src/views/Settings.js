import React from 'react';
import { Context as AuthContext } from './../providers/authProvider.js';
import { useHistory } from 'react-router-dom';

const styles = {
  container: {
    background: 'white',
    width: '200px',
    overflowY: 'scroll',
  }
};

export const Settings = () => {
  const history = useHistory();
  const { logout } = React.useContext(AuthContext);

  return (
    <section style={styles.container}>
      <button onClick={() => logout(() => history.push('/'))}>Logout</button>
    </section>
  );
};