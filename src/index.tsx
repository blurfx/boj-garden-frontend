import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import HomePage from '../pages/home';
import UserPage from '../pages/user';
import Layout from '../layouts/Layout';

const globalStyle = css`
  :root {
    --gray: #d8d9dc;
    --green: #30a14e;
    --blue: #204ecf;
    --dark-blue: #1e3e98;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body, #root {
    height: 100%;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/user/:username' component={UserPage} />
        </Switch>
      </BrowserRouter>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root'),
);
