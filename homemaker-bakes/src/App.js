import React from 'react';
import profile from './profile.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Homemaker Bakes</p>
        <img src={profile} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
