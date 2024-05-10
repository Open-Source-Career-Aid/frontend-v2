import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import BotMessage from './components/chat/botmessage';
import Question from './components/chat/question';

function App() {
  return (
    <div className="App flex flex-col h-screen dark:bg-gray-800 max-w-[826px] mx-auto">
      <Navbar />
      <div className='flex flex-col justify-start w-full'>
        <BotMessage>
          <p>Welcome, carbon-based life form. Let’s see how you fare in my arena of knowledge. Buckle up.</p>
        </BotMessage>
        <BotMessage>
          <Question 
          question="What is the capital of France?" 
          questionindex={1} 
          totalquestions={3} 
          status='pending' 
          />
        </BotMessage>
        <BotMessage>
          <Question 
          question="What is the capital of France?" 
          questionindex={1} 
          totalquestions={3} 
          status='won' 
          />
        </BotMessage>
        <BotMessage>
          <Question 
          question="What is the capital of France?" 
          questionindex={1} 
          totalquestions={3} 
          status='lost' 
          />
        </BotMessage>
      </div>
    </div>
  );
}

export default App;