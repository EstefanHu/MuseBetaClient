import React from 'react';
import { Context as ProfileContext } from './../providers/profileProvider.js';
import { Intro } from './../components/intro.js';
import styled from 'styled-components';
import { RiCamera2Line } from 'react-icons/ri';

import { getProfileImage } from './../constants/network.js';

const Container = styled.section`
  background: white;
  width: 500px;
  overflow-y: scroll;
  padding-bottom: 20px;
`;

const Info = styled.div`
  width: 100%;
`;

const ImgWrapper = styled.div`
  margin: 20px;
  background-color: rgb(240,240,240);
  height: 180px;
  width: 180px;
  border-radius: 90px;
  border: 1px solid lightgrey;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  &:hover > span {
    opacity: 0.6;
  }
`;

const Img = styled.img`
  height: inherit;
  width: inherit;
`;

const UploadButton = styled.span`
  width: inherit;
  height: 60px;
  opacity: 0;
  background-color: rgb(220,220,220);
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
    <Container>
      <Info>
        <ImgWrapper onClick={uploadImage}>
          <Img
            src={
              photo ? getProfileImage + '/' + photo
                : require('./../images/StockProfile.png')
            }
            alt='profile'
          />
          <UploadButton>
            <RiCamera2Line size={60} color={'grey'} />
          </UploadButton>
        </ImgWrapper>
      </Info>
      {
        stories?.map(item => (
          <Intro
            key={item._id}
            item={item}
          />
        ))
      }
    </Container>
  );
};