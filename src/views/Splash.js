import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import { GiGlobe } from 'react-icons/gi';
import {
  MdCardTravel,
  MdRecordVoiceOver
} from 'react-icons/md';

const styles = {
  container: {
    background: 'var(--color)',
    padding: '250px 0 50px 0',
  },
  hero: {
    paddingLeft: '70px',
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
  world: {
    backgroundColor: 'black',
    height: '800px',
    width: '800px',
    background: 'radial-gradient(circle, rgba(255,50,50,1) 6%, rgba(219,45,45,1) 100%)',
  },
  us: {

  },
  vision: {
  },
  visionHeader: {
    fontSize: '4rem',
    marginBottom: '20px',
    marginLeft: '70px',
  },

  visionList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: 'calc(100vw - 500px)',
    paddingLeft: '40px',
  },
  visionItem: {
    width: '440px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px 0 30px 0',
  },
  visionCard: {
    height: '250px',
    width: '250px',
    borderRadius: '15px',
    backgroundColor: 'rgb(20,20,20)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  visionText: {
    color: 'white',
    fontSize: '25px',
    fontWeight: 500,
    textAlign: 'center',
  },
}

const VISION_CARD_ICON_SIZE = 180;
const VISION_CARD_ICON_COLOR = 'rgb(240,100,100)';

export const Splash = () => {
  return (
    <>
      <main style={styles.container}>
        {/* <section style={styles.hero}>
          <h1 style={styles.title}>:Muse</h1>
          <h2 style={styles.pitch}>Bring your<br />story to<br />the world</h2>
          <p style={styles.bit}>:Muse is the worlds first localized story
          telling platform. We bring all your communties stories, poems and
          accounts into one immersive experience. In doing so, we connect you,
          your writing and your life with your communities story.</p>
          <BsArrowDown style={styles.downArrow} />
        </section>
        <section style={styles.world}>
        </section>
        <section style={styles.us} id='us'>
        </section> */}
        <section style={styles.vision} id='vision'>
          <h1 style={styles.visionHeader}>The Future is everywhere.</h1>
          <ul style={styles.visionList}>
            <li style={styles.visionItem}>
              <div style={styles.visionCard}>
                <GiGlobe color={VISION_CARD_ICON_COLOR} size={VISION_CARD_ICON_SIZE} />
              </div>
              <h2 style={styles.visionText}>While we may have started telling the stories from our own backyard, we have dreams of going global</h2>
            </li>
            <li style={styles.visionItem}>
              <div style={styles.visionCard}>
                <MdCardTravel color={VISION_CARD_ICON_COLOR} size={VISION_CARD_ICON_SIZE} />
              </div>
              <h2 style={styles.visionText}>Imagine traveling to a new city and immediately connecting with the stories, the culture and the history of that land</h2>
            </li>
            <li style={styles.visionItem}>
              <div style={styles.visionCard}></div>
              <h2 style={styles.visionText}></h2>
            </li>
            <li style={styles.visionItem}>
              <div style={styles.visionCard}>
                <MdRecordVoiceOver color={VISION_CARD_ICON_COLOR} size={VISION_CARD_ICON_SIZE} />
              </div>
              <h2 style={styles.visionText}></h2>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};