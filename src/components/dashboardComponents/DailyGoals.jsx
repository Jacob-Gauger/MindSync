import React from "react";

const DailyGoals=()=>{
    return(
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
    )
}

export default DailyGoals