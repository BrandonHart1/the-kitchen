import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomeScreen />
    </React.Fragment>
  );
}

export default App;
