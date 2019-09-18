import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  background: #EAEFE7;
  display: grid;
  grid-template-areas:
    "hd hd hd hd"
    ". sd mn ."
  ;
  grid-template-columns: 1fr 12em calc(1024px - 12em) 1fr;
  grid-template-rows: 3em 1fr;
  grid-gap: 0 1em;
  height: 100vh;
`;

const Wrapper = styled.div`
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const Header = styled.header`
  grid-area: hd;
  background: #548041;
  font-family: 'Exo 2', Arial, sans-serif;
  font-weight: bold;
  color: white;
  line-height: 3em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Sidebar = styled.aside`
  grid-area: sd;
  height: calc(100% - 2em);
  overflow-y: auto;
  background: white;
  border: 1px solid lightgrey;
  border-radius: .5em;
  padding: .5em 1em;
  box-sizing: border-box;
  margin: 1em 0;
`;

const Main = styled.main`
  grid-area: mn;
  overflow-y: auto;
  padding: 2em 0em;
  box-sizing: border-box;
`;

const Layout = (props) =>
  <Page>
    <Header>
      <Wrapper>
        Beautiful navbar
      </Wrapper>
    </Header>

    <Sidebar>
      Beautiful sidebar
    </Sidebar>

    <Main>
      <Wrapper>
        {props.children}
      </Wrapper>
    </Main>
  </Page>
;

export default Layout;
