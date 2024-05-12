import './App.css';
// import BotMessage from './components/chat/botmessage';
// import Question from './components/chat/question';
// import Navbar from './components/navbar';
// import HintBox from './components/modals/hintbox';
// import ScoreGrid from './components/summary/scoregrid';
// import SummaryHeader from './components/headers/summaryheader';
// import { TopicHeader } from './components/headers/topicheader';
// import Image from './components/image';
import Base from './components/base';

function App() {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-800 max-w-[430px] mx-auto">
      <Base />
    </div>
  );
}

export default App;