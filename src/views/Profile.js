import React from 'react';
import { Context as ProfileContext } from './../providers/profileProvider.js';
import { Intro } from './../components/intro.js';
import { RiCamera2Line } from 'react-icons/ri';
import styled from 'styled-components';

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
  img: {
    height: 'inherit',
    width: 'inherit'
  },
  uploadButton: {
    width: 'inherit',
    height: '60px',
    backgroundColor: 'rgb(220,220,220)',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileInfo: {
    paddingTop: '20px',
  },
  sectionHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px'
  }
};

const ImageWrapper = styled.div`
  margin: 20px;
  background-color: rgb(240,240,240);
  height: 180px;
  width: 180px;
  border-radius: 90px;
  border: 1px solid lightgrey;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  & > span {
    opacity: 0;
  }

  &:hover > span {
    opacity: 0.6;
  }
`;

export const Profile = () => {
  const { state: { id, photo, library, stories }, fetchLibrary, fetchStories } = React.useContext(ProfileContext);

  React.useEffect(() => {
    if (stories === null && id)
      fetchStories(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, stories]);

  React.useEffect(() => {
    if (library === null)
      fetchLibrary()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uploadImage = () => {
    console.log('hello world');
  };

  return (
    <section style={styles.container}>
      <div style={styles.infoWrapper}>
        <ImageWrapper onClick={uploadImage}>
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
        </ImageWrapper>
        <div style={styles.profileInfo}>

        </div>
      </div>
      <div>
        <h2 style={styles.sectionHeader}>Library</h2>
        {
          library?.map(item => (
            <Intro
              key={item._id}
              item={item}
            />
          ))
        }
      </div>
      <div>
        <h2 style={styles.sectionHeader}>Your Stories</h2>
        {
          stories?.map(item => (
            <Intro
              key={item._id}
              item={item}
            />
          ))
        }
      </div>
    </section>
  );
};