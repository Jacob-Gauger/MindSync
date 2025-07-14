import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Journal from './components/pages/Journal';
import HabitManager from './components/pages/HabitManager';
import Sleep from './components/pages/Sleep';

function App() {
  const [habits, setHabits] = useState([]);

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
        <Route path='/' element={<Dashboard habits={habits} setHabits={setHabits} />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/habits" element={<HabitManager habits={habits} setHabits={setHabits} />} />
        <Route path="/sleep" element={<Sleep />} />
      </Routes>
    </div>
  );
}

export default App;
