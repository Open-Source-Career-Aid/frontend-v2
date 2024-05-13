import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Landing from './pages/landing';

function App() {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-800 max-w-[430px] mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;