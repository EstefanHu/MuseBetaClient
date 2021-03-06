import React from 'react';
import { Context as StoryContext } from '../providers/storyProvider.js';
import { RiBookmarkLine } from 'react-icons/ri';
import { BsBook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { Context as RefContext } from './../providers/refProvider.js';

import { useDateFormat } from './../hooks/useDateFormat.js';

import styled from 'styled-components';

const styles = {
  author: {
    color: 'grey',
    textDecoration: 'none',
  },
}

const Article = styled.article`
  width: 100%;
  padding: 15px 20px;
  border-top: 1px solid lightgrey;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: var(--color);
  margin-bottom: 5px;
`;

const Channel = styled(Link)`
  color: grey;
  text-decoration: none;
  font-size: 0.9rem;
`;

const Pitch = styled.p`
  text-indent: 20px;
  margin-bottom: 8px;
`;

const Meta = styled.p`
  margin-top: 5px;
  font-size: 0.9rem;
  color: grey
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const Span = styled.span`
  width: 185px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  background: rgb(240,240,240);
  border-radius: 3px;
  font-size: 0.9rem;
  padding: 8px 12px;
  border-bottom: 1.5px solid lightgrey;
  display: flex;
  align-items: center;

  &:focus {

  }
`;

export const Intro = ({ item }) => {
  const { setFocusedStoryId } = React.useContext(StoryContext);
  const { state: { viewport }, setViewport } = React.useContext(RefContext);

  const focusStory = () => {
    setViewport({
      ...viewport,
      longitude: item.startLocation.coordinates[0],
      latitude: item.startLocation.coordinates[1]
    })
  };

  return (
    <Article
      onMouseEnter={() => setFocusedStoryId(item._id)}
      onMouseLeave={() => setFocusedStoryId(null)}
    >
      <Header>
        <Title>{item.title}</Title>
        <Channel
          to={`/app/channel/${item.channel}`}
        >{item.channel}</Channel>
      </Header>
      <Pitch>{item.pitch}</Pitch>
      <Meta>
        <Link to={`/app/profile/${item.authorId}`} style={styles.author}>
          {item.authorName}&nbsp;
        </Link>-&nbsp;
        {useDateFormat(item.createdAt)}
      </Meta>
      <Footer>
        <Span>
          <Button>
            <RiBookmarkLine size={20} color='grey' />&nbsp;&nbsp;Save
          </Button>
          <Button onClick={focusStory}>
            <BsBook size={20} color='grey' />&nbsp;&nbsp;Read
          </Button>
        </Span>
      </Footer>
    </Article>
  );
};