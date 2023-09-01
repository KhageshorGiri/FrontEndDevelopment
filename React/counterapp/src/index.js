import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header/header';
import Counter from './Components/Counter/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <Counter />
    </div>
  </React.StrictMode>
);

