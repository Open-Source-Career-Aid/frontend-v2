import React from 'react';
import './App.css';
import DumbLevels from './components/dumblevels';
import Navbar from './components/navbar';
import QuestionBox from './components/questionbox';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuestionBox />
      <DumbLevels />
    </div>
  );
}

export default App;
