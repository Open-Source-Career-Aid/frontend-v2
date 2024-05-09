import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import BotMessage from './components/chat/botmessage';

function App() {
  return (
    <div className="App flex flex-col h-screen px-32 dark:bg-gray-800 max-w-[826px] mx-auto">
      <Navbar />
      <div className='flex flex-col justify-start'>
        <BotMessage>
          <p>Hi, I am a chatbot. How can I help you today?</p>
        </BotMessage>
      </div>
    </div>
  );
}

export default App;