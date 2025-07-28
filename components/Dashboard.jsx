import React, { useState, useEffect } from 'react';
import '../css/App.css';

const Dashboard = ({ habits, setHabits, tasks, goals, setGoals }) => {
    const [affirmation, setAffirmation] = useState('');
    const [streaksCount, setStreaksCount] = useState(10);

    const affirmations = [
        "I am beautiful",
        "I am smart",
        "I am talented",
        "I am enough",
        "I am loved",
        "I am worthy",
        "I am unique",
        "I can do anything I put my mind to"
    ];

    useEffect(() => {
        let i = 0;
        const timeLimit = 2000;

        const affirmloop = () => {
            if (i < affirmations.length) {
                setAffirmation("I affirm that " + affirmations[i]);
                i = (i + 1) % affirmations.length;
                setTimeout(affirmloop, timeLimit);
            }
        };

        affirmloop();
    }, []);

    return (
        <div id="bodyGrid">
            <div id="mainBar">
                <div className="content active" id="dashboard">
                    <div id="affirmation">
                        <h2>Affirmation</h2>
                        <p>{affirmation || "Loading affirmations..."}</p>
                    </div>
                    
                    <div id="dailyGoals">
                        <h2>Daily Goals</h2>
                        <p>Goal checklist will appear here. You might need to make it so that you can scroll</p>
                        {goals && goals.length > 0 ? (
                            <ul>
                                {goals.map((goal, index) => (
                                    <li key={index}>{goal.title}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No goals set yet</p>
                        )}
                    </div>
                    
                    <div id="habitTracker">
                        <h2>Habits</h2>
                        <p>Here we can hopefully fit a nice counter</p>
                        {habits && habits.length > 0 ? (
                            <ul>
                                {habits.map((habit, index) => (
                                    <li key={index}>{habit.name}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No habits tracked yet</p>
                        )}
                    </div>
                    
                    <div id="streaks">
                        <h2>Basic Streaks Counter</h2>
                        <p>Streaks: Day {streaksCount}</p>
                    </div>
                    
                    <div id="carousel">
                        <h2>Carousel that will cycle through info like sleep logs/mood/etc</h2>
                        <p>Sleep data, mood tracking, and other insights will appear here</p>
                    </div>
                    
                    <div id="upcoming">
                        <h2>Planner</h2>
                        <p>Planner integration + upcoming events</p>
                        {tasks && tasks.length > 0 ? (
                            <ul>
                                {tasks.slice(0, 3).map((task, index) => (
                                    <li key={index}>{task.title}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No upcoming tasks</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
