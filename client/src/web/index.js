import React from 'react';
import { render } from 'react-dom'; 
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from '../store/index';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes/index';

// Components
import Loading from './components/Spinner/Spinner';

// Load css
require('./styles/style.scss');

const { persistor, store } = configureStore();

const rootElement = document.getElementById('root');

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Router>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

render(<Root />, rootElement);
registerServiceWorker();
