import React from 'react';
import Root from './src/mobile/index';
import configureStore from './src/store';

const { persistor, store } = configureStore();

export default function App() {
  return <Root store={store} persistor={persistor} />;
}
