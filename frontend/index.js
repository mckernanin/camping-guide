import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import styled from 'styled-components';

import configureStore from './redux/configureStore';

import routes from './routes';

const history = createHistory();
const store = configureStore(history);

const RootStyles = styled.div`
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue',
    Arial, sans-serif;
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

render(
  <Provider store={store}>
    <RootStyles>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </RootStyles>
  </Provider>,
  document.getElementById('root')
);
