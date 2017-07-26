import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import App from './containers/App';
import NavBar from './components/Navbar';

import configureStore from './redux/configureStore';

const store = configureStore();

const RootStyles = styled.div`
  font-family: sans-serif;
  height: 100%;
  width: 100%;
`;

render((
  <Provider store={store}>
    <RootStyles>
      <NavBar />
      <App />
    </RootStyles>
  </Provider>
), document.getElementById('root'));
