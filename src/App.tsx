import './App.css';
import BotMessage from './components/chat/botmessage';
import Question from './components/chat/question';
import Navbar from './components/navbar';
import HintBox from './components/modals/hintbox';
import ScoreGrid from './components/summary/scoregrid';
import SummaryHeader from './components/headers/summaryheader';
import { TopicHeader } from './components/headers/topicheader';

function App() {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-800 max-w-[430px] mx-auto">
      <Navbar />
      <div className='flex flex-col justify-start w-full px-5'>
        <BotMessage>
          <p className='text-text-primary'>Welcome, carbon-based life form. Let’s see how you fare in my arena of knowledge. Buckle up.</p>
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
          <p className='text-text-primary'>
          <b>Correct!</b> I guess you might be smart after all. Here’s an explanation of why that was the right/wrong choice!
          </p>
        </BotMessage>
        <HintBox before={10} after={5} />
        <ScoreGrid scores={[10, 0, 0, 15, 0]} hints={[true, true, true, true, true]} />
        <SummaryHeader score={25} />
        <div className='p-2'>
          <TopicHeader topic='Geography' />
        </div>
        <div className='p-2'>
          <TopicHeader topic='Geography' score={30} showscore={true} />
        </div>
      </div>
    </div>
  );
}

export default App;