// src/App.tsx
import React from 'react';
import ChuckNorrisFact from './components/ChuckNorrisFact';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ChuckNorrisFact />
      </header>
    </div>
  );
};

export default App;
