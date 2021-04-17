import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

const Div = styled.div`
  color: red;
`;

ReactDOM.render(
  <React.StrictMode>
    <Div>Index</Div>
  </React.StrictMode>,
  document.getElementById('root'),
);
