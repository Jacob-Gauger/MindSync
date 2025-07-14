import React from "react";
import '../../css/dashboardComponentsCSS/DailyGoals.css'

const DailyGoals=()=>{
    return(
        <div id="dailyGoals">
            <h2>Daily goals</h2>
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
    )
}

export default DailyGoals