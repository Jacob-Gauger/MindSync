import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Journal from "../components/pages/Journal";
import HabitManager from "../components/pages/HabitManager";
import Sleep from "../components/pages/Sleep";
import Planning from "../components/pages/Planning";
import GoalsManager from "../components/pages/GoalsManager";
import Breathing from "../components/pages/Breathing";
import Achievements from "../components/pages/Achievements";
import Mood from "../components/pages/Mood";
import Meditation from "../components/pages/Meditation";
import Logout from "../components/logout";

function App() {
  const [habits, setHabits] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [goals, setGoals] = useState([]);

  // Load habits from localStorage once
  useEffect(() => {
    const stored = localStorage.getItem("habits");
    if (stored) setHabits(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever habits change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              habits={habits}
              setHabits={setHabits}
              tasks={tasks}
              goals={goals}
              setGoals={setGoals}
            />
          }
        />
        <Route
          path="/journal"
          element={
            <Journal
              journalEntries={journalEntries}
              setJournalEntries={setJournalEntries}
            />
          }
        />
        <Route
          path="/habits"
          element={<HabitManager habits={habits} setHabits={setHabits} />}
        />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route
          path="/planner"
          element={<Planning tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/goals"
          element={<GoalsManager goals={goals} setGoals={setGoals} />}
        />
        <Route path="/breathing" element={<Breathing />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
