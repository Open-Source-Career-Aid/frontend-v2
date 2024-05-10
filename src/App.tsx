import './App.css';
import BotMessage from './components/chat/botmessage';
import Question from './components/chat/question';
import Navbar from './components/navbar';
import HintBox from './components/modals/hintbox';

function App() {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-800 max-w-[430px] mx-auto px-5">
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
          points={0}
          />
        </BotMessage>
        <BotMessage>
          <Question 
          question="What is the capital of France?" 
          questionindex={1} 
          totalquestions={3} 
          status='won'
          points={10}
          />
        </BotMessage>
        <BotMessage>
          <Question 
          question="What is the capital of France?" 
          questionindex={1} 
          totalquestions={3} 
          status='lost' 
          points={0}
          />
        </BotMessage>
        <BotMessage>
          <b>Correct!</b> I guess you might be smart after all. Here’s an explanation of why that was the right/wrong choice!
        </BotMessage>
        <HintBox />
      </div>
    </div>
  );
}

export default App;