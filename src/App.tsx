import React from 'react';
import './App.css';
import { ProductManager } from './components/ProductManager';
import logo from './images/logo.png';

const App: React.FC = () => {
  return (
    <div className="NexupFrontendChallenge">
      <div className="flexHeader">
        <img width={100} src={logo} alt="nexUp Logo" />
        <h1> Frontend Challenge</h1>
      </div>

      <ProductManager />
    </div>
  );
};

export default App;
