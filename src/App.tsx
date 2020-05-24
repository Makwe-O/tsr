import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>Hi</div>
    </Provider>
  );
}

export default App;
