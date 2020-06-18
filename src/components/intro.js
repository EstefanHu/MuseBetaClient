import React from 'react';
import { RiBookmarkLine } from 'react-icons/ri';
import { BsBook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const styles = {
  title: {
    fontSize: '1.5rem',
    color: 'var(--color)',
    marginRight: '5px',
  },
  genre: {
    color: 'grey',
    textDecoration: 'none',
    fontSize: '.9rem',
  },
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

const Pitch = styled.p`
  text-indent: 20px;
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

export const Intro = ({ index, title, pitch, genre, createdAt, author, authorId }) => {
  return (
    <Article>
      <Header>
        <h1 style={styles.title}>{index}. {title}</h1>
        <Link to={`/app/genre/${genre}`} style={styles.genre}>{genre}</Link>
      </Header>
      <Pitch>{pitch}</Pitch>
      <Meta>
        <Link to={`/app/profile/${authorId}`} style={styles.author}>
          {author}&nbsp;
        </Link>-&nbsp;
        {createdAt}
      </Meta>
      <Footer>
        <Span>
          <Button>
            <RiBookmarkLine size={20} color='grey' />&nbsp;&nbsp;Save
          </Button>
          <Button>
            <BsBook size={20} color='grey' />&nbsp;&nbsp;Read
          </Button>
        </Span>
      </Footer>
    </Article>
  )
}