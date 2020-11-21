import React from 'react';
import './App.scss';

import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
