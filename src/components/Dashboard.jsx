import React from "react";
import '../css/Dashboard.css';

const Dashboard=()=>{
    return (
            <div id="dashboard">
                <div id="mainBar">
                    <div className="content active" id="dashboard">
                        <div id="affirmation">
                            <h2>affirmation</h2>
                            <p>affirmation goes here</p>
                        </div>

                        <div id="dailyGoals">
                            <h2>daily goals</h2>
                            <p>goal checklist will appear here. will add manual checkbox entry later</p>
                            {[
                                "Brush teeth",
                                "Do homework",
                                "Take out trash",
                                "Walk the dog",
                                "Do laundry",
                                "Go to gym",
                                "Journal entry",
                                "Do daily exercises in health tab",
                                "Write",
                                "Talk to a friend",
                                "Check long term goals"
                            ].map((label, index) => {
                                const id = `dailyGoal${index + 1}`;
                                return (
                                    <div key={id}>
                                        <input type="checkbox" id={id} name={id} value={id} />
                                        <label htmlFor={id}> {label}</label><br />
                                    </div>
                                );
                            })}
                        </div>

                        <section id="habitDash">
                            <h2>Habit Tracker</h2>
                            <p id="habit-summary">0 / 0 habits completed</p>
                            <div id="habitProgBar">
                                <div id="habitProgress"></div>
                            </div>
                        </section>

                        <div id="streaks">
                            <h2>basic streaks counter</h2>
                        </div>

                        <div id="carousel">
                            <h2>carousel that will cycle through info like sleep logs/mood/etc</h2>
                        </div>

                        <div id="upcoming">
                            <h2>planner</h2>
                            <p>planner integration + upcoming events</p>
                        </div>
                    </div>

                    <div className="content" id="mood">
                        <h1>mood</h1>
                    </div>

                    <div className="content" id="exercise">
                        <h1>exercise</h1>
                    </div>

                    <div className="content" id="breathing">
                        <h1>breathing</h1>
                    </div>

                    <div className="content" id="meditation">
                        <h1>meditation</h1>
                    </div>

                    <div className="content" id="goals">
                        <h1>goals</h1>
                    </div>

                    <div className="content" id="achievements">
                        <h1>achievements</h1>
                    </div>

                    

                    <div className="content" id="charts">
                        <h1>charts</h1>
                    </div>
                </div>
            </div>
    );
};

export default Dashboard;
