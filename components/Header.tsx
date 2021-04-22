import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const Container = styled.header`
  padding-bottom: 4em;
`;

const Title = styled.h1`
  color: #46a571;
  
  font-weight: 300;
  font-size: 4em;
  font-family: 'Varela Round', sans-serif 
`;

const Header = ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <Container>
    <Title>{ children }</Title>
  </Container>
);

export default Header;
