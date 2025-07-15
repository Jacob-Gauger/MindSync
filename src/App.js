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

function App() {
  const [habits, setHabits] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
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

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    const saved = localStorage.getItem("goals");
    if (saved) {
      setGoals(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard habits={habits} setHabits={setHabits} tasks={tasks} goals={goals} setGoals={setGoals}/>} />
        <Route path="/journal" element={<Journal journalEntries={journalEntries} setJournalEntries={setJournalEntries} />} />
        <Route path="/habits" element={<HabitManager habits={habits} setHabits={setHabits} />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/planner" element={<Planning tasks={tasks} setTasks={setTasks} />} />
        <Route path="/goals" element={<GoalsManager goals={goals} setGoals={setGoals} />} />
      </Routes>
    </div>
  );
}

export default App;
