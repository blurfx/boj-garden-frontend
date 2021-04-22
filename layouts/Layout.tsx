import React, { PropsWithChildren } from 'react';
import { Container, Wrapper } from './styles';
import ContentWrapper from '../components/ContentWrapper';
import Header from '../components/Header';

const Layout = ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <Container>
    <Wrapper>
      <Header>BOJ Garden</Header>
      <ContentWrapper>
        { children }
      </ContentWrapper>
    </Wrapper>
  </Container>
);

export default Layout;
