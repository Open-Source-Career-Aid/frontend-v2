import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Landing from './pages/landing';
import Game from "./pages/game";
import Navbar from "./components/navbar";
import SummaryPage from "./pages/summary";
import LeaderPage from "./pages/leaderboard";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hook";

import { validate_sessionid , createSession } from "./helpers/createSession";
import { getTodaysContent } from "./redux/features/gameplay";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkSession = async () => {
      if (!validate_sessionid()) {
        await createSession();
      }
    };

    const fetchContent = async () => {
      await dispatch(getTodaysContent());
    }
  
    checkSession();
    fetchContent();
  }, [dispatch]);

  return (
    <div className="flex flex-col h-screen dark:bg-gray-800 max-w-[430px] mx-auto scrollbar-hide">
      <Navbar />
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/game" element={<Game />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/leaderboard" element={<LeaderPage />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;