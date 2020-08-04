import React from 'react';
import { Context as ProfileContext } from './../providers/profileProvider.js';
import { Intro } from './../components/intro.js';
import { RiCamera2Line } from 'react-icons/ri';
import './../styles/profile.css';

import { getProfileImage } from './../constants/network.js';

const styles = {
  container: {
    background: 'white',
    width: '500px',
    overflowY: 'scroll',
    paddingBottom: '20px',
  },
  infoWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  imgWrapper: {
    margin: '20px',
    backgroundColor: 'rgb(240,240,240)',
    height: '180px',
    width: '180px',
    borderRadius: '90px',
    border: '1px solid lightgrey',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
  },
  img: {
    height: 'inherit',
    width: 'inherit'
  },
  uploadButton: {
    width: 'inherit',
    height: '60px',
    opacity: 0,
    backgroundColor: 'rgb(220,220,220)',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileInfo: {
    paddingTop: '20px',
  }
};

export const Profile = () => {
  const { state: { id, photo, stories }, fetchStories } = React.useContext(ProfileContext);

  React.useEffect(() => {
    if (stories === null && id)
      fetchStories(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, stories]);

  const uploadImage = () => {
    console.log('hello world');
  }

  return (
    <section style={styles.container}>
      <div style={styles.infoWrapper}>
        <div
          style={styles.imgWrapper}
          onClick={uploadImage}
        >
          <img
            style={styles.img}
            src={
              photo ? getProfileImage + '/' + photo
                : require('./../images/StockProfile.png')
            }
            alt='profile'
          />
          <span
            id='profile_update_overlay'
            style={styles.uploadButton}
          >
            <RiCamera2Line size={60} color={'grey'} />
          </span>
        </div>
        <div style={styles.profileInfo}>
        </div>
      </div>
      {
        stories?.map(item => (
          <Intro
            key={item._id}
            item={item}
          />
        ))
      }
    </section>
  );
};