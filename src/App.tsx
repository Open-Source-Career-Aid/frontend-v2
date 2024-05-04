import React from 'react';
import './App.css';
import DumbLevels from './components/dumblevels';
import Navbar from './components/navbar';
import QuestionBox from './components/questionbox';

function App() {
  return (
    <div className="App flex flex-col justify-between h-screen px-32 dark:bg-gray-800">
      <Navbar />
      <div className='flex flex-col h-full mx-32'>
        <QuestionBox />
        <DumbLevels />
      </div>
    </div>
  );
}

export default App;