import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  const [habits, setHabits] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [moodHistory, setMoodHistory] = useState([]);
  const [goals, setGoals] = useState([]);

  // Load habits from localStorage once
  useEffect(() => {
    const stored = localStorage.getItem('habits');
    if (stored) setHabits(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever habits change
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard habits={habits} setHabits={setHabits} tasks={tasks} goals={goals} setGoals={setGoals} moodHistory={moodHistory}/>} />
        <Route path="/journal" element={<Journal journalEntries={journalEntries} setJournalEntries={setJournalEntries} />} />
        <Route path="/habits" element={<HabitManager habits={habits} setHabits={setHabits} />} />
        <Route path="/mood" element={<MoodTracker moodHistory={moodHistory} setMoodHistory={setMoodHistory}/>} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/planner" element={<Planning tasks={tasks} setTasks={setTasks} />} />
        <Route path="/goals" element={<GoalsManager goals={goals} setGoals={setGoals}/>} />
      </Routes>
    </div>
  );
}

export default App;
