import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Landing from './pages/landing';
import Game from "./pages/game";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-800 max-w-[430px] mx-auto">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;