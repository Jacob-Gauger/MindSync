import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './css/App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Journal from './components/pages/Journal';
import HabitManager from './components/pages/HabitManager';
import Sleep from './components/pages/Sleep';
import Planning from './components/pages/Planning';
import GoalsManager from './components/pages/GoalsManager';
import MoodTracker from './components/pages/MoodTracker';
import Meditation from './components/pages/Meditation';
import Login from './components/pages/Login';

function App() {
  const location = useLocation(); // Get current route
  const [habits, setHabits] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [moodHistory, setMoodHistory] = useState([]);
  const [goals, setGoals] = useState([]);
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '');
  const [loggedIn, setLoggedIn] = useState(() => localStorage.getItem('loggedIn') === 'true');

  useEffect(() => {
    const stored = localStorage.getItem('habits');
    if (stored) setHabits(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn);
    localStorage.setItem('username', username);
  }, [loggedIn, username]);


  const hideHeaderRoutes = ['/Login'];

  return (
    <div className="App">
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/MindSync" element={
          <Dashboard habits={habits} setHabits={setHabits} tasks={tasks} goals={goals} setGoals={setGoals} moodHistory={moodHistory} loggedIn={loggedIn} />
        } />
        <Route path="/Journal" element={<Journal journalEntries={journalEntries} setJournalEntries={setJournalEntries} />} />
        <Route path="/Habits" element={<HabitManager habits={habits} setHabits={setHabits} />} />
        <Route path="/Mood" element={<MoodTracker moodHistory={moodHistory} setMoodHistory={setMoodHistory} />} />
        <Route path="/Sleep" element={<Sleep />} />
        <Route path="/Meditation" element={<Meditation />} />
        <Route path="/Planner" element={<Planning tasks={tasks} setTasks={setTasks} />} />
        <Route path="/Goals" element={<GoalsManager goals={goals} setGoals={setGoals} />} />
        <Route path="/Login" element={<Login username={username} setUsername={setUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
      </Routes>
    </div>
  );
}

export default App;
