import React from 'react';
import './App.scss';

import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        Redux
      </div>
    </Provider>
  );
};

export default App;
