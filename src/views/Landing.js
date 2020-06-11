import React, { useEffect } from 'react';
import { Auth } from '../layout/auth';
import { BsArrowDown, BsShieldShaded } from 'react-icons/bs'

export const Landing = () => {
  useEffect(() => {

  }, [])

  return (
    <>
      <Header />
      <main style={styles.container}>
        <section style={styles.hero}>
          <h1 style={styles.title}>:Muse</h1>
          <h2 style={styles.pitch}>Focus on the<br />work that<br />matters</h2>
          <p style={styles.bit}>:Muse is the worlds first localized story
          telling platform. We bring all your communties stories, poems and
          accounts into one immersive experience. In doing so, we connect you,
          your writing and your life with your communities story.</p>
          <BsArrowDown style={styles.downArrow} />
        </section>
      </main>
      <Auth />
    </>
  )
}

const Header = () => (
  <header style={styles.header}>
    <h1><BsShieldShaded style={{ color: 'black' }} /> :Muse</h1>
    <ul style={styles.links}>
      <li>
        <a
          style={styles.link}
          href='#'
        >For teams</a>
      </li>
      <li>
        <a
          style={styles.link}
          href='#'
        >For Individuals</a>
      </li>
    </ul>
  </header>
)

const styles = {
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    padding: '45px 30px',
    color: 'white',
  },
  links: {
    display: 'flex',
    listStyle: 'none',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '40px',
    fontSize: '1.2rem',
  },
  container: {
    background: 'var(--color)',
    padding: '250px 0 0 70px',
  },
  hero: {

  },
  title: {
    fontSize: '2rem',
  },
  pitch: {
    fontSize: '8vw',
    letterSpacing: '-1px',
    fontWeight: 'bold',
    fontFamily: 'Heebo',
    lineHeight: '0.95',
    margin: '10px 0 60px 0',
  },
  bit: {
    color: 'white',
    width: '500px',
    fontSize: '1.3rem',
  },
  downArrow: {
    fontSize: '4rem',
    margin: '20px 0 60px 0'
  },

}