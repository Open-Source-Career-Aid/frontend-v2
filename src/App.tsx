import React from 'react';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App flex flex-col justify-between h-screen px-32 dark:bg-gray-800 max-w-[826px] mx-auto">
      <Navbar />
      <div className='flex flex-col h-full mx-32'>
      </div>
    </div>
  );
}

export default App;