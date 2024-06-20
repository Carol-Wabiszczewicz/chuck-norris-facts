// src/App.tsx
import React from 'react';
import ChuckNorrisFact from './components/ChuckNorrisFact';
import './index.css';
import ChuckNorrisFactsList from './components/ChuckNorrisFactsList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ChuckNorrisFact />
        <ChuckNorrisFactsList />
      </header>
    </div>
  );
};

export default App;
