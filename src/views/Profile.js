import React from 'react';
import { Context as ProfileContext } from './../providers/profileProvider.js';
import { Intro } from './../components/intro.js';
import styled from 'styled-components';

const Container = styled.section`
  background: white;
  width: 500px;
  overflow-y: scroll;
  padding-bottom: 20px;
`;

export const Profile = () => {
  const { state: { id, stories }, fetchStories } = React.useContext(ProfileContext);

  React.useEffect(() => {
    if (stories === null)
      fetchStories(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, stories]);

  return (
    <Container>

      {
        stories?.map(item => (
          <Intro
            key={item._id}
            _id={item._id}
            title={item.title}
            channel={item.channel}
            pitch={item.pitch}
            createdAt={item.createdAt}
            authorName={item.authorName}
          />
        ))
      }
    </Container>
  );
};