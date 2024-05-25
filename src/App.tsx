import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Landing from './pages/landing';
import Game from "./pages/game";
import Navbar from "./components/navbar";
import SummaryPage from "./pages/summary";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { validate_sessionid , createSession } from "./helpers/createSession";

function App() {

  useEffect(() => {
    const checkSession = async () => {
      if (!validate_sessionid()) {
        await createSession();
      }
    };
  
    checkSession();
  }, []);

  return (
    <div className="flex flex-col h-screen dark:bg-gray-800 max-w-[430px] mx-auto">
      <Navbar />
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/game" element={<Game />} />
            <Route path="/summary" element={<SummaryPage />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;