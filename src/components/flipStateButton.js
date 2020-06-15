import React from 'react';

export const FlipStateButton = ({ trueTitle, falseTitle, state, action }) => {
  return state ?
    <button
      onClick={() => action(false)}
      style={styles.button}
    >{falseTitle}</button>
    : <button
      onClick={() => action(true)}
      style={styles.button}
    >{trueTitle}</button>
}

const styles = {
  button: {
    border: 'none',
    fontSize: '1rem',
    background: 'transparent',
    cursor: 'pointer',
  }
}