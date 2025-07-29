import React, { useState, useEffect } from 'react';
import Affirmations from "./dashboardComponents/Affirmations";
import Goals from "./dashboardComponents/Goals";
import Habits from "./dashboardComponents/Habits";
import Streaks from "./dashboardComponents/Streaks";
import Carousel from "./dashboardComponents/Carousel";
import Planner from "./dashboardComponents/Planner";
import '../css/Dashboard.css';

const Dashboard=({habits, setHabits, tasks, setTasks, goals, setGoals, moodHistory, loggedIn})=>{
  if (!loggedIn) {
    return (
      <div className="dashboard-locked">
        <h2>You must be logged in to view the dashboard.</h2>
      </div>
    );
  } else {
    return (
        <div id="dashboard">
            <Affirmations />
            <Goals goals={goals} setGoals={setGoals}/>
            <Habits habits={habits} setHabits={setHabits} />
            <Streaks />
            <Carousel moodHistory={moodHistory}/>
            <Planner tasks={tasks} setTasks={setTasks}/>
        </div>
    );
  }

};

export default Dashboard;
