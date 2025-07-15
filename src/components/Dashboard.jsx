import React, { useState, useEffect } from 'react';
import Affirmations from "./dashboardComponents/Affirmations";
import DailyGoals from "./dashboardComponents/DailyGoals";
import Habits from "./dashboardComponents/Habits";
import Streaks from "./dashboardComponents/Streaks";
import Carousel from "./dashboardComponents/Carousel";
import Planner from "./dashboardComponents/Planner";
import Planning from './pages/Planning';
import '../css/Dashboard.css';

const Dashboard=({habits, setHabits, tasks, setTasks})=>{
    return (
            <div id="dashboard">
                <div id="mainBar">
                    <div id="dashboard">
                        <Affirmations />
                        <DailyGoals />
                        <Habits habits={habits} setHabits={setHabits} />
                        <Streaks />
                        <Carousel />
                        <Planner tasks={tasks} setTasks={setTasks}/>
                    </div>
                </div>
            </div>
    );
};

export default Dashboard;
