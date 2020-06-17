import React from 'react';

import styled from 'styled-components';

const Item = styled.article`
  min-height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 60px 0;
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const WheelItem = ({ children, title }) => {
  return (
    <Item>
      <H1>{title}</H1>
      {children}
    </Item>
  )
}