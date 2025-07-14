import React from "react";
import Affirmations from "./dashboardComponents/Affirmations";
import DailyGoals from "./dashboardComponents/DailyGoals";
import Habits from "./dashboardComponents/Habits";
import Streaks from "./dashboardComponents/Streaks";
import Carousel from "./dashboardComponents/Carousel";
import Planner from "./dashboardComponents/Planner";
import '../css/Dashboard.css';

const Dashboard=()=>{
    return (
            <div id="dashboard">
                <div id="mainBar">
                    <div className="content active" id="dashboard">
                        <Affirmations />
                        <DailyGoals />
                        <Habits />
                        <Streaks />
                        <Carousel />
                        <Planner />
                    </div>
                </div>
            </div>
    );
};

export default Dashboard;
